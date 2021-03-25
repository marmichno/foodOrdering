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