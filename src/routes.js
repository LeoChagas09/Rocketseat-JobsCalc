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

// req, res
routes.get('/', (req, res) => res.render(views + 'index'))
routes.get('/job', (req, res) => res.render(views + 'job'))
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }))



module.exports = routes;