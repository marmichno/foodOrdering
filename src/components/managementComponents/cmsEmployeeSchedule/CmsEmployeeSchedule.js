import {CmsNavbar} from '../cmsNavbar/CmsNavbar';
import {useState, useEffect} from 'react';
import {employeesShiftPostRequest} from '../../../requests/employeesShiftPostRequest';
import {employeesShiftGetRequest} from '../../../requests/employeesShiftGetRequest';
import {employeesShiftDeleteRequest} from '../../../requests/employeesShiftDeleteRequest';
import {employeesSchedulePostRequest} from '../../../requests/employeesSchedulePostRequest';
import {employeesScheduleGetRequest} from '../../../requests/employeesScheduleGetRequest';
import {employeesScheduleDeleteRequest} from '../../../requests/employeesScheduleDeleteRequest';
import {employeesGetRequest} from '../../../requests/employeesGetRequest';

export const CmsEmployeesSchedule = () =>{

    const newDate = new Date();

    const [selectedMonth, setSelectedMonth] = useState(newDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(newDate.getFullYear());
    const [shiftRangeText, setShiftRangeText] = useState("");
    const [deleteShiftId, setDeleteShiftId] = useState("");
    const [shifts, setShifts] = useState([]);
    const [selectedShift, setSelectedShift] = useState("");
    const [employees, setEmployees] = useState([]);
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        getShifts();
        getEmployees();
        getSchedule();
    },[]);

    useEffect(() =>{
        getSchedule();
    },[selectedMonth]);


    const getEmployees = async () =>{
        const response = await employeesGetRequest();
        setEmployees(response);
    }
    
    const getShifts = async () =>{
        const response = await employeesShiftGetRequest();
        setShifts(response);
    }

    const addShift = async () =>{
        const response = await employeesShiftPostRequest({
            "range":shiftRangeText
        });
        getShifts();
    }

    const getSchedule = async () =>{
        const response = await employeesScheduleGetRequest(selectedYear, selectedMonth);
        setSchedule(response);
    }
    
    const deleteShift = async () =>{
        const response = await employeesShiftDeleteRequest(deleteShiftId);
        getShifts();
    }


    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let month = newDate.getMonth();

    const createArrayOfDays = (selectedMonth, selectedYear) => {
        let arrayOfDays = [];

        let daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'];

        for(let i = 0; i < daysInMonth; i++){
            let whichDayIsIt = new Date(selectedYear, selectedMonth, i + 1).getDay();

            arrayOfDays.push(
                {
                    dayDate: (i + 1) < 10 ? `0${i + 1}` : (i + 1),
                    selectedMonth: (selectedMonth + 1) < 10 ? `0${selectedMonth + 1}` : (selectedMonth + 1),
                    selectedYear: selectedYear,
                    dayName: days[whichDayIsIt]
                }
            );
        }

        return arrayOfDays;
    }

    const modifyEmployeeShift = async (e) => {

        const date  = e.currentTarget.dataset.date;
        const employeeEntity = e.currentTarget.dataset.employee;

        if(parseInt(selectedShift) !== 0 && selectedShift !== ""){
            const response = await employeesSchedulePostRequest(date, selectedShift, employeeEntity);
            getSchedule();
        }else if(parseInt(selectedShift) === 0){
            const shiftId = findShift(date, parseInt(employeeEntity), "deleteShift");

            if(shiftId === undefined){
                return;
            }else{
                const response = await employeesScheduleDeleteRequest(shiftId.id);
                getSchedule();
            }
        }else{
            return;
        }
    }

    const changeDate = (e) => {
        if(e.currentTarget.innerHTML === "next"){
            if(selectedMonth <= 10){
                setSelectedMonth(selectedMonth + 1);
            }else{
                setSelectedYear(selectedYear + 1);
                setSelectedMonth(0);
            }
        }else{
            if(selectedMonth !== 0){
                setSelectedMonth(selectedMonth - 1);
            }else{
                setSelectedMonth(11);
                setSelectedYear(selectedYear - 1);
            }
        }
    }

    const findShift = (shiftDate, shiftEmployeeId, event) =>{
    
        if(schedule !== undefined){
            const shift = schedule.filter(value => {
                    if(value.date === shiftDate && value.employeeEntity.id === shiftEmployeeId){
                        return true;
                    }else{
                        return false;
                    }
                })[0];

                if(event === "findShift"){
                    return shift !== undefined ? shift.shiftEntity.id : "";
                }else if(event === "deleteShift"){
                    return shift;
                }
        }else{
            return
        }
    }

    const changeSelectedShift = (e) =>{
        let shifts = document.querySelectorAll('.shiftActive');
        shifts.forEach(element => element.classList.remove('shiftActive'));
        e.currentTarget.classList.add('shiftActive');
        setSelectedShift(e.currentTarget.dataset.shift);
    }

    return(
        <div className="cmsEmployeesScheduleContainer">
            <CmsNavbar/>
            <div className="cmsEmployeesScheduleContent">
                <div className="shiftsContainer">
                    <div className="shiftsInfoContainer">
                        <div className="shiftInfo">
                            <input onChange={(e) => setDeleteShiftId(e.target.value)} type="number" placeholder="shift id" autocomplete="off" name="category" required></input>
                            <button onClick={deleteShift}>delete</button>
                        </div>
                        <div className="shiftInfo">
                            <h1 data-shift={0} onClick={changeSelectedShift}>day off</h1>
                        </div>
                        {shifts !== undefined ?
                            shifts.map(value => {
                                return <div className="shiftInfo">
                                            <h1 data-shift={value.id} onClick={changeSelectedShift}>
                                                {value.id} - {value.range}
                                            </h1>
                                        </div>
                            })
                        : null
                        }
                    </div>
                    <div className="addShifts">
                        <input onChange={(e) => setShiftRangeText(e.target.value)} type="text" placeholder="hour range ex: 16:30-24:30" autocomplete="off" name="category" required></input>
                        <button onClick={addShift}>add new shift</button>
                    </div>
                </div>

                <div className="calendarContainer">
                    
                    <div className="changeDate">
                        <button onClick={changeDate}>previous</button><h1>{`${selectedYear}, ${monthNames[selectedMonth]}`}</h1><button onClick={changeDate}>next</button>
                    </div>

                    <div className="employeeRow">
                    <div className="employee"></div>
                    {createArrayOfDays(selectedMonth, selectedYear).map(value =>{
                        return <div><b>{value.dayDate}</b></div>
                    })}
                    </div>
                    {
                    employees !== undefined ?
                        employees.map((employee, id) => {
                            return(
                                <>
                                    <div className="employeeRow">
                                        <div className="employee">{employee.firstName}</div>
                                            {createArrayOfDays(selectedMonth, selectedYear).map(value => {
                                                const date = `${value.selectedYear}-${value.selectedMonth}-${value.dayDate}`

                                                if(value.dayName === 'Saturday' || value.dayName === 'Sunday'){

                                                    return <div 
                                                    onClick={modifyEmployeeShift}
                                                    data-date={date}
                                                    data-employee={employee.id} 
                                                    style={{backgroundColor: 'orange'}}
                                                    >
                                                        {findShift(`${date}`, employee.id, "findShift")}
                                                    </div>
                                                }else{
                                                    return <div
                                                    onClick={modifyEmployeeShift}
                                                    data-date={date}
                                                    data-employee={employee.id}
                                                    >
                                                        {findShift(`${date}`, employee.id, "findShift")}
                                                    </div>
                                                }
                                            })}
                                    </div>
                                </>
                            )
                        })
                    : null
                    }
                </div>
            </div>
        </div>
    )
}