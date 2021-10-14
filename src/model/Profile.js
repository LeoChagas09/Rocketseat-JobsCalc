// criação de objeto
let data = {
    name: "Leonardo",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGz29UiJ7fTaQ/profile-displayphoto-shrink_800_800/0/1626837282806?e=1639008000&v=beta&t=33xBuQryAMUG0cXDUd6NycXClGVh1vyd2tdwhY8oBg0",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75
};

module.exports = {
    get(){
        return data;
    },
    update(newData){
        data = newData;
    }
}
