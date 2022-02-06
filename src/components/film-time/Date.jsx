function GetCurrentDate(){

    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

    return `${days[newDate.getDay()]}, ${date}.${month<10?`0${month}`:`${month}`}`

}

export default GetCurrentDate;