import Sequelize from 'sequelize';

class DeviceEntity extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true
                },
                token: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                bundleId: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    field: 'bundle_id'
                },
                type: { type: DataTypes.INTEGER, defaultValue: 2 }
            },
            {
                timestamps: false,
                tableName: 'tb_device',
                sequelize
            }
        );
    }

    static associate(models) {
        DeviceEntity.belongsToMany(models.Channel, {
            through: 'tb_channel_device',
            as: 'channels',
            foreignKey: {
                name: 'device_id',
                fieldName: 'deviceId'
            },
            onDelete: 'cascade'
        });
    }
}

export default DeviceEntity;
