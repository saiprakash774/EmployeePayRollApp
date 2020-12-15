const stringfyDate=(date)=>{
    const options={ day:'numeric',month:'short',year:'neumeric'};
    const newDate=!date?"undefined":newDate(Date.parse(date)).toLocalDateString('en-GB',options);
    return newDate;
}