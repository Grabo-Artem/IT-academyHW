let referenceDate = new Date(2000, 0, 1);
let currentDate = new Date();

function Fridays13() {
    let count = 0;
    for (let day = referenceDate;
            day <= currentDate;
            day.setDate(day.getDate() + 1))
    {
        if (day.getDay() === 5 && day.getDate() === 13) {
            count++;
        }
    }
    return count;
};
console.log(`Количество пятниц 13-го с ${referenceDate.getFullYear()} года: ${Fridays13()}`);
