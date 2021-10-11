const express = require('express');
const routes = express.Router();

const views = __dirname + '/views/'

// criação de objeto
const profile = {
    name: "Leonardo",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGz29UiJ7fTaQ/profile-displayphoto-shrink_800_800/0/1626837282806?e=1639008000&v=beta&t=33xBuQryAMUG0cXDUd6NycXClGVh1vyd2tdwhY8oBg0",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso" ,
        "daily-hours": 2,
        "total-hours": 60,
        created_at: Date.now() // atribuindo data de hoje
    },
    {
        id: 2,
        name: "OneTwo Project" ,
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now() // atribuindo data de hoje
    }
]

routes.get('/', (req, res) => {


    const updatedJobs = jobs.map((job) => {
        // ajustes no Jobs
        // calculo de tempo restante
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDate = createdDate.setDate()

        return job
    })
  
    
    return res.render(views + 'index', { jobs })

})
routes.get('/job', (req, res) => res.render(views + 'job'))
routes.post('/job', (req, res) => {

    const lastId = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily_hours"],
        "total-hours": req.body["total_hours"],
        created_at: Date.now() // atribuindo data de hoje
    })
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }))



module.exports = routes;