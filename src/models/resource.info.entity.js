import Sequelize from 'sequelize';

class ResourceInfoEntity extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                version: { type: DataTypes.INTEGER }
            },
            {
                timestamps: false,
                tableName: 'tb_resourceinfo',
                sequelize
            }
        );
    }
}

export default ResourceInfoEntity;
