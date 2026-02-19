const express = require('express');
const cors = require('cors');
const uploadImage = require('./services/storage.service')
const teamModel = require('./models/team.model');
const multer = require('multer')


const app = express();
app.use(cors({
  origin: "https://gdg-umit.vercel.app"
}));
app.use(express.json());

const upload = multer({storage:multer.memoryStorage()});



app.post('/team/', upload.single("image"),async (req, res) => {
    // add team member details to the database
    // req is the entire http req obj, so,
    // req.body is where the data posted lives, express.json()
    // therefore we destructure to avoid writing req.body.field  
    try {
        
        const result = await uploadImage(req.file.buffer)

        const { name, level, position, department, linkedin } = req.body;

        const member = await teamModel.create({
            name,
            level,
            position,
            department,
            linkedin,
            image: result.url
        });

        res.status(201).json({
            message: "Team member added successfully",
            member: member
        });
    
    } catch (err) {
        
        res.status(500).json({ error: err.message });
    }

});

app.get('/team/leads', async (req, res) => {
    // to dispaly leads members' details 
    try {
        
        const leads = await teamModel.find({level:"Leads"});
        
        res.status(200).json({
            message: "team details fetched successfully",
            team: leads
        });

    } catch (err) {
        
        res.status(500).json({ error: err.message });
    }
});


app.get('/team/workforce', async (req, res) => {
    // to dispaly workforce members' details 
    try {
        
        const workforce = await teamModel.find({level:"Workforce"});
        
        res.status(200).json({
            message: "team details fetched successfully",
            team: workforce
        });

    } catch (err) {
        
        res.status(500).json({ error: err.message });
    }
});

app.delete('/team/:id', async (req, res) => {
    try {
        
        const _id = req.params.id;

        const deletedMember = await teamModel.findByIdAndDelete(_id);

        if (!deletedMember) {
            return res.status(404).json({ message: "Team member not found" });
        }

        res.status(200).json({
            message: "Team member deleted successfully",
            member: deletedMember
        });
    
    } catch (err) {
        
        res.status(500).json({ error: err.message });
    }
})

module.exports = app;