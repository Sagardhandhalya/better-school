import { useEffect, useMemo, useState } from 'react';
import './../App.css';
import * as XLSX from 'xlsx';
import { getDaysInMonth } from '../utils/getDaysfromMonth';
import MarkSheet from '../components/MarkSheet';
import { Navigate, useNavigate } from 'react-router-dom';


function MarksheetGenrator() {
    const [data, setData] = useState([]);
    const [totalData, setTotalData] = useState(null);
    const [sheetNames, setSheetNames] = useState([]);
    const [currentSheet, setCurrentSheet] = useState('');

    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [std, setStd] = useState("");

    const [subjects, setSubjects] = useState([]);

    const navigate = useNavigate()
    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            setTotalData(workbook);
            setSheetNames(workbook.SheetNames);
            setCurrentSheet(workbook.SheetNames[0])
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setData(parsedData);
        };
    };

    const updateDropDown = (e) => {
        let name = e.target.value;
        setCurrentSheet(name);
        const sheet = totalData.Sheets[name];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setData(parsedData);
    };

    const monthArr = useMemo(() => {
        return getDaysInMonth(month - 1, year)
    }, [month, year])


    useEffect(() => {
        if (data.length) {
            let coolArr = [14, 15, 16, 17, 18, 19]
            let subs = []
            coolArr.forEach(item => {
                subs.push({ name: data[0][item] ? data[0][item] : "", totalMark: data[1][item] ? data[1][item] : "" })
            })
            setSubjects(subs)
        }
    }, [data])

    const user = localStorage.getItem("user")
    console.log(user);
    if (!user) return <Navigate to="/" replace={true} />

    return (
        <div>
            <div className='flex  flex-col md:flex-row justify-center items-center mb-8 '>
                <h1 className='text-2xl font-bold underline no-print md:mr-4 mb-4'>Upload files and update month year to genrate marksheet</h1>
                <button className='bg-red-500 rounded-md px-6 py-2 text-white' onClick={() => {
                    localStorage.removeItem("user")
                    navigate("/")
                }}>
                    Log Out
                </button>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center border-2 border-red-10 p-6 rounded-xl no-print'>
                <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className='mb-4 md:mr-4 w-64' />
                <div className='flex flex-col items-start md:mr-4'>
                    <label>Month</label>
                    <input className='border-solid border-2 rounded-md w-1/2 border-gray-500 px-3 py-1' type="number" value={month} onChange={(e) => setMonth(e.target.value)} placeholder='month' />
                </div>

                <div className='flex flex-col items-start'>
                    <label>Year</label>
                    <input className='border-solid border-2 rounded-md w-1/2 border-gray-500 px-3 py-1' type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder='year' />
                </div>

                <div className='flex flex-col items-start'>
                    <label>Standard</label>
                    <input className='border-solid border-2 rounded-md w-1/2 border-gray-500 px-3 py-1' type="number" value={std} onChange={(e) => setStd(e.target.value)} placeholder='std' />
                </div>

            </div>

            {
                !!sheetNames.length && <>
                    <div className='flex items-center justify-center border-2 border-green-100 mt-8 rounded-xl p-4 no-print'>
                        <h1 className="text-xl mr-8">Loading data of </h1>
                        <select className='border-solid border-2 rounded-md w-48 border-gray-500 px-3 py-1' value={currentSheet} onChange={updateDropDown}>
                            {sheetNames.map((name) => (
                                <option>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        {data.slice(2).map((x) => (
                            <MarkSheet data={x} monthArr={monthArr} month={month} year={year} subjects={subjects} totalMarks={data[1]["Total"]} std={std} />
                        ))}
                    </div>
                </>
            }

        </div>
    );
}

export default MarksheetGenrator;
