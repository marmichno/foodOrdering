import {CmsNavbar} from './CmsNavbar';
import {useState, useEffect} from 'react';

export const CmsEmployeesSchedule = () =>{

    const newDate = new Date();

    const [selectedMonth, setSelectedMonth] = useState(newDate.getMonth());
    const [currentYear, setCurrentYear] = useState(newDate.getYear());

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const employees = ['filler', 'employee1', 'employee1', 'employee1', 'employee1', 'employee1', 'employee1', 'employee1', 'employee1'];

    let month = newDate.getMonth();



    const createArrayOfDays = (selectedMonth, currentYear) => {
        let arrayOfDays = [];

        let year = newDate.getYear();
        let daysInMonth = new Date(currentYear, selectedMonth + 1, 0).getDate();

        console.log(daysInMonth);

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'];

        for(let i = 0; i < daysInMonth; i++){
            let whichDayIsIt = new Date(currentYear, selectedMonth + 1, i).getDay();
            arrayOfDays.push(
                {
                    dayDate: i + 1,
                    dayName: days[whichDayIsIt]
                }
            );
        }

        return arrayOfDays;
    }

    
    const showDate = () =>{
        // console.log(year, monthNames[month], date);
        console.log(createArrayOfDays(selectedMonth, currentYear));
    }

    return(
        <div className="cmsEmployeesScheduleContainer">
            <CmsNavbar/>
            <div className="cmsEmployeesScheduleContent">
                <div className="shiftsContainer">
                    <div className="shiftsInfoContainer">
                        <div className="shiftInfo"><h1>1 - 06:00 - 14:00</h1></div>
                        <div className="shiftInfo"><h1>2 - 07:00 - 15:00</h1></div>
                        <div className="shiftInfo"><h1>3 - 08:30 - 16:30</h1></div>
                        <div className="shiftInfo"><h1>4 - 13:40 - 21:40</h1></div>
                        <div className="shiftInfo"><h1>5 - 15:00 - 23:00</h1></div>
                        <div className="shiftInfo"><h1>6 - 16:30 - 00:30</h1></div>
                        <div className="shiftInfo"><h1>6 - 16:30 - 00:30</h1></div>
                        <div className="shiftInfo"><h1>6 - 16:30 - 00:30</h1></div>
                        <div className="shiftInfo"><h1>6 - 16:30 - 00:30</h1></div>
                        <div className="shiftInfo"><h1>6 - 16:30 - 00:30</h1></div>
                        <div className="shiftInfo"><h1>6 - 16:30 - 00:30</h1></div>
                    </div>
                    <div className="addShifts">
                        <input type="text" placeholder="hour range ex: 16:30-24:30" autocomplete="off" name="category" required></input>
                        <input className="shiftId" type="number" placeholder="shift id ex: 1" autocomplete="off" name="category" required></input>
                        <button>add new shift</button>
                    </div>
                </div>
                <div className="calendarContainer">
                    {employees.map(employee => {
                        return(
                            <>
                                <div className="employeeRow">
                                    <div className="employee">{employee}</div>
                                        {createArrayOfDays(selectedMonth, currentYear).map(value => {
                                            if(employee === 'filler'){
                                                return( 
                                                    <div>{value.dayDate}</div>
                                                )
                                            }
                                            if(value.dayName === 'Saturday' || value.dayName === 'Sunday'){
                                                return <div style={{backgroundColor: 'orange'}}></div>
                                            }else{
                                                return <div></div>
                                            }
                                        })}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}