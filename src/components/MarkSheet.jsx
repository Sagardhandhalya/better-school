import React from 'react'
import SubjectTotalMark from './SubjectTotalMark';
import MarksAndDateTitle from './MarksAndDateTitle';
import MarkDate from './MarkDate';
import "./../App.css"

const SUBJECT_LIST = {
    "હિ": "ગણિત",
    "ગ": "ગણિત",
    "સા": "ગણિત",
    "ગુ": "ગુજરાતી",
    "અ": "અંગ્રેજી",
    "અં": "અંગ્રેજી",
    "વિ": "Vignan",
    "એ": "english"
}

const MarkSheet = ({ data, monthArr, year, month, subjects, totalMarks, std }) => {
    console.log(subjects);
    return (
        <table style={{ pageBreakBefore: "always", width: "100%" }} className='mt-8' >
            <tbody>
                <tr className='h-32'>
                    <td colspan="4" rowspan="1">
                        <div className='flex justify-center w-100 h-100'>
                            <img className='w-32 h-32' src="https://e0.pxfuel.com/wallpapers/168/994/desktop-wallpaper-downloa-swami-vivekananda-quotes-swami-vivekananda.jpg" />
                        </div>
                    </td>
                    <td colspan="6" rowspan="1">
                        <span className='font-bold'>શ્રી વિવેકાનંદ એજ્યુકેશન ઇન્સ્ટિટ્યૂટ એન્ડ કમ્પયુટર ક્લાસીસ - દેવલી</span>
                    </td>
                    <td colspan="6" rowspan="1" >
                        <div className='flex justify-center w-100 h-100'>
                            <img className='w-32 h-32' src="https://e0.pxfuel.com/wallpapers/168/994/desktop-wallpaper-downloa-swami-vivekananda-quotes-swami-vivekananda.jpg" />
                        </div>
                    </td>
                </tr>
                <tr >
                    <td colspan="8" rowspan="2">
                        <span >{data?.name}</span>
                    </td>
                    <td colspan="4" rowspan="1">
                        <span > STD : {std} </span>
                    </td>
                    <td colspan="4" rowspan="1">
                        Seat No: 9
                    </td>
                </tr>
                <tr >
                    <td colspan="8" rowspan="1">
                        AugustYear 2023/24
                    </td>
                </tr>
                <tr >
                    <td colspan="3" rowspan="1">
                    </td>

                    <td colspan="8" rowspan="1">
                        <span >Subject wais manthli Total Mark</span>
                    </td>
                    <td colspan="5" rowspan="16">
                        <div className=" text-start flex flex-col justify-start items-center">
                            <div className='text-start'>
                                <p> Progress:</p>
                                <p> Yes / No</p>
                            </div>

                            <div className='mt-4 text-start px-1'>
                                <p> Total {data.x}  passed </p>
                                <p>In {totalMarks / 30} tests  </p>
                            </div>

                            <div className='mt-4 text-start'>
                                <p>Percentage:</p>
                                <p className='font-bold'>{Number(data?.pr).toFixed(2)} %</p>
                            </div>
                        </div>

                    </td>
                </tr>
                <tr >
                    <td colspan="1" rowspan="1">
                        <span >ક્રમ</span>
                    </td>
                    <td colspan="2" rowspan="1">
                        <SubjectTotalMark subject="વિષય તથા " totalMark="કુલમાર્ક" />
                    </td>
                    {
                        subjects.map(sub => {
                            return <td colspan="1" rowspan="1">
                                <SubjectTotalMark subject={SUBJECT_LIST[sub.name]} totalMark={sub.totalMark} />
                            </td>
                        })
                    }
                    <td colspan="1" rowspan="1">
                    </td>
                    <td colspan="1" rowspan="1">
                        <SubjectTotalMark subject="કુલ ટોટલ" totalMark={totalMarks} />
                    </td>
                </tr>
                {
                    monthArr.map((week, idx) => {
                        return <>
                            <tr >
                                <td colspan="1" rowspan="2">
                                    <span >{idx + 1}</span>
                                </td>
                                <td colspan="2" rowspan="2">
                                    <MarksAndDateTitle />
                                </td>
                                {
                                    week.map((date) => {
                                        return <td colspan="1" rowspan="2">
                                            <MarkDate mark={data[date] ? data[date] : "---"} date={`${date}/${month}/${year}`} />
                                        </td>
                                    })
                                }
                                <td colspan="1" rowspan="2">
                                    <span ></span>
                                </td>
                            </tr>
                            <tr >
                            </tr>
                        </>

                    })
                }

                <tr >
                    <td colspan="1" rowspan="1">
                    </td>
                    <td colspan="2" rowspan="1">
                        <b >કૂલ ટોટલ</b>
                    </td>
                    <td colspan="7" rowspan="1">
                        <span ></span>
                    </td>
                    <td colspan="1" rowspan="1">
                        <b>{data.Total}</b>
                    </td>
                </tr>
                <tr >
                    <td colspan="11">
                        <div style={{ height: "100px" }}>
                            <span >વાલી ની સહી……… </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table >
    )
}

export default MarkSheet