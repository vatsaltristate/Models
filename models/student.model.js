module.exports = (sequelize, DataTypes, Model) => {

class Student extends Model {}

Student.init({
        
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING    
        }
}, {
    sequelize,
    modelName: 'Student',
    tableName: 'Students',
    timestamps: false

});

console.log(Student === sequelize.models.Student); 

}