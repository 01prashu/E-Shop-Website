const mongoose = require("mongoose");
const URL_String = "mongodb+srv://netkeprashant2324:dypcoe12@cluster1.2fspdn5.mongodb.net/E-Product?retryWrites=true&w=majority&appName=Cluster1";

const ConnectToDB = async () => {
    try {
        await mongoose.connect(URL_String, { useNewUrlParser: true });
        console.log("Connected");

        const fetched_data = await mongoose.connection.db.collection("ProductData");
        const data = await fetched_data.find({}).toArray();
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = ConnectToDB;
