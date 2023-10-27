import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

function CostSavingsCalculator() {
    const [numEmployees, setNumEmployees] = useState(100);
    const [employeeHourlyRate, setEmployeeHourlyRate] = useState(30);
    const [numMeetingsPerWeek, setNumMeetingsPerWeek] = useState(5);
    const [meetingDurationHours, setMeetingDurationHours] = useState(1);
    const [reductionPercentage, setReductionPercentage] = useState(25);
    const [costSavingsPerYear, setCostSavingsPerYear] = useState(0);

    const handleCalculate = () => {
        const totalMeetingTimeWithoutProduct =
            numEmployees * numMeetingsPerWeek * meetingDurationHours;
        const totalMeetingTimeWithProduct =
            totalMeetingTimeWithoutProduct * (1 - reductionPercentage / 100);
        const totalCostWithoutProduct =
            totalMeetingTimeWithoutProduct * employeeHourlyRate;
        const totalCostWithProduct =
            totalMeetingTimeWithProduct * employeeHourlyRate;
        const costSavings = totalCostWithoutProduct - totalCostWithProduct;
        const costSavingsPerYear = costSavings * 52; // assuming 52 weeks in a year
        setCostSavingsPerYear(costSavingsPerYear);
    };
    const textFieldStyle = {
        marginBottom: 20,
        width: 300,
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                width: "100%",
                paddingTop: 50,
                height: "100vh",
                alignItems: "center",
                backgroundColor: "white",
            }}
        >
            <TextField
                label="Number of employees"
                type="number"
                value={numEmployees}
                onChange={(e) => setNumEmployees(parseInt(e.target.value))}
                style={textFieldStyle}
            />
            <TextField
                label="Employee hourly rate"
                type="number"
                value={employeeHourlyRate}
                onChange={(e) =>
                    setEmployeeHourlyRate(parseInt(e.target.value))
                }
                style={textFieldStyle}
            />
            <TextField
                label="Number of meetings per week"
                type="number"
                value={numMeetingsPerWeek}
                onChange={(e) =>
                    setNumMeetingsPerWeek(parseInt(e.target.value))
                }
                style={textFieldStyle}
            />
            <TextField
                label="Meeting duration (hours)"
                type="number"
                value={meetingDurationHours}
                onChange={(e) =>
                    setMeetingDurationHours(parseInt(e.target.value))
                }
                style={textFieldStyle}
            />
            <TextField
                label="Reduction percentage"
                type="number"
                value={reductionPercentage}
                onChange={(e) =>
                    setReductionPercentage(parseInt(e.target.value))
                }
                style={textFieldStyle}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleCalculate}
            >
                Calculate
            </Button>
            <Typography variant="h5" style={{ color: "black" }}>
                Cost savings per year: ${costSavingsPerYear}
            </Typography>
        </div>
    );
}

export default CostSavingsCalculator;
