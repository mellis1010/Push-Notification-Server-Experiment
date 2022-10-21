import Sequelize from 'sequelize';

class ChannelEntity extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: { type: DataTypes.STRING, allowNull: false, unique: true },
                type: {
                    type: DataTypes.STRING
                },
                data: {
                    type: DataTypes.STRING
                }
            },
            {
                timestamps: false,
                tableName: 'tb_channel',
                sequelize
            }
        );
    }

    static associate(models) {
        ChannelEntity.belongsToMany(models.Device, {
            through: 'tb_channel_device',
            as: 'devices',
            foreignKey: {
                name: 'channel_id',
                fieldName: 'channelId'
            },
            onDelete: 'cascade'
        });
    }
}

export default ChannelEntity;
