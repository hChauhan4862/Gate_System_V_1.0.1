const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
// const prisma = new PrismaClient();

const editTheme = async (req, res) => {
    const { theme } = req.body;
    const { id } = req.params;
    console.log(theme, id)
    
   try{
    const userSettings = await prisma.user_settings.updateMany({
        where: { user_id: parseInt(id) },
        data: { 
            theme: theme,
            updatedAt: new Date() 
        },
    });
    const message = {   
                        meggage:"Theme updated successfully",
                        userSettings: userSettings
                    }
    return res.status(httpStatus.OK).send(message);
   }
    catch(err){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message );
    }
};

const editSettings = async (req, res) => {
    const {  language, city } = req.body;
    const { id } = req.params;
    console.log(language, city, id)

    try{
        const userSettings = await prisma.user_settings.updateMany({
            where: { user_id: parseInt(id) },
            data: {
                language: language,
                city: city,
                updatedAt: new Date()
            },
        });
        const message = {
            message:"Settings updated successfully",
            userSettings: userSettings
        }
        return res.status(httpStatus.OK).send(message);
    }
    catch(err){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message );
    }
};

module.exports = {
    editTheme,
    editSettings
};