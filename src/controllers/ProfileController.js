const Profile = require('../model/Profile')

module.exports =  {
    index(req, res) {
        res.render('profile', { profile: Profile.get() })
    },
    update(req, res) {
        // req.body para pegar os dados
        const data = req.body;

        // definir quantas semanas tem num ano: 52
        const weeksPerYear = 52
        // remover as semanas de ferias do ano, para pegar quantas semanas tem em 1 mes
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
        // quantas horas por semana estou trabalhando
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
        // total de horas trabalhadas no mes
        const  monthlyTotalHours = weekTotalHours * weeksPerMonth

        // qual valor da minha hora
        const valueHour = data["monthly-budget"] / monthlyTotalHours

        Profile.update({
            ...Profile.get(),
            ... req.body,
            "value-hour": valueHour
        })
            

        return res.redirect('/profile')
    }
}