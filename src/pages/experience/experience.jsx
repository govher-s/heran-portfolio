import React, { useState } from 'react';
import './experience.css';
import Navbar from '../homepage/navbar';

function Experience() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const experiences = [
        {
            title: "Education",
            details: [
                { type: "bold", text: "South Dakota State University - Class of 2026 | Brookings, SD" },
                { type: "normal", text: "Bachelor of Science in Business Economics" },
                { type: "normal", text: "Minor - Management" },
                { type: "normal", text: "Dean's List: 4/4 semesters" },
                { type: "break" },
                { type: "bold", text: "The Global Career Accelerator | Excel & Tableau Trainee | Remote" },
                { type: "normal", text: "August 2024 - December 2024" },
                { type: "bullet", text: "Used functions, PivotTables, and visualizations to look at data in Excel, and made interactive dashboards and reports in Tableau" },
                { type: "bullet", text: "Made data-driven business recommendations from A/B test results and data collected from several sources" },
                { type: "bullet", text: "Worked with a global team to deliver accurate projects on time" }
            ]
        },
        {
            title: "Work Experience",
            details: [
                { type: "bold", text: "Business Development Coordinator | Brookings, SD" },
                { type: "normal", text: "Dakota BioWorx - Part Time" },
                { type: "normal", text: "Sep 2025 - Present" },
                { type: "bullet", text: "Conduct client outreach and relationship management to expand the company's network and strategic partnerships" },
                { type: "bullet", text: "Identify and qualify potential clients using LinkedIn and other research tools, increasing business development opportunities" },
                { type: "bullet", text: "Support market research initiatives to inform marketing strategies and enhance company visibility within the biotechnology sector" },
                { type: "break" },
                { type: "bold", text: "Finance & Budget Intern | Brookings, SD" },
                { type: "normal", text: "South Dakota State University" },
                { type: "normal", text: "May 2025 - Present" },
                { type: "bullet", text: "Collaborate with the Finance & Budget team to assist with accounts payable operations and ensure accurate processing of financial transactions" },
                { type: "bullet", text: "Participate in reviewing Summer PAF (Personnel Action Forms) to confirm employees were paid correctly and from the proper fund sources" },
                { type: "bullet", text: "Gained exposure to higher education budgeting practices, including fund allocation from state support, tuition revenue, and private donors" },
                { type: "bullet", text: "Contribute to various real-world projects while developing financial analysis, budgeting, and data accuracy skills in a professional office setting" },
                { type: "break" },
                { type: "bold", text: "Community Assistant | Brookings, SD" },
                { type: "normal", text: "Thorne Hall, South Dakota State University" },
                { type: "normal", text: "Aug 2023 - Present" },
                { type: "bullet", text: "Assist 80 residents with the transition to university and residence hall life" },
                { type: "bullet", text: "Remain available to residents while on-call, completed regular rounds in the residents' Hall to ensure the safety of nearly 500 residents" },
                { type: "bullet", text: "Addressed any issues that arose and implemented the emergency protocol" },
                { type: "bullet", text: "Plan 10 Hall Activities each semester to further resident professional and community development" },
                { type: "break" },
                { type: "bold", text: "Student Supervisor | Brookings, SD" },
                { type: "normal", text: "Sodexo - Dairy Bar" },
                { type: "normal", text: "Sep 2022 - May 2024" },
                { type: "bullet", text: "Communicated and worked with a Team to present and explain menu items to customers in a courteous manner" },
                { type: "bullet", text: "Maintained 20 hours per week while attending college full-time" }
            ]
        },
        {
            title: "Campus Involvements",
            details: [
                { type: "bold", text: "President | International Relations Council" },
                { type: "normal", text: "September 2024 - Present" },
                { type: "bullet", text: "Lead student organization focused on global awareness" },
                { type: "bullet", text: "Organized cross-cultural events and fostered collaboration among students from diverse backgrounds" },
                { type: "bullet", text: "Manage team operations and event planning to promote global engagement on campus" },
                { type: "break" },
                { type: "bold", text: "Secretary | International Relations Council" },
                { type: "normal", text: "November 2022 - July 2023" },
                { type: "bullet", text: "Organized a diversity and multicultural community event for 300+ people" },
                { type: "bullet", text: "Held 3 fundraisers raising $2,000+ in one day" },
                { type: "bullet", text: "Planned events with the executive team" },
                { type: "break" },
                { type: "bold", text: "Member | African Student Association" },
                { type: "normal", text: "January 2022 - May 2024" },
                { type: "break" },
                { type: "bold", text: "Member | Economics Club" },
                { type: "normal", text: "November 2022 - May 2023" }
            ]
        },
        {
            title: "Skills",
            details: [
                { type: "bold", text: "Languages" },
                { type: "bullet", text: "Fluent in English and Amharic" },
                { type: "break" },
                { type: "bold", text: "Technical Skills" },
                { type: "bullet", text: "Microsoft Excel (Advanced): PivotTables, Functions, Data Analysis" },
                { type: "bullet", text: "Tableau: Interactive Dashboards and Data Visualization" },
                { type: "bullet", text: "Data Driven Decision Making" },
                { type: "bullet", text: "Financial Analysis and Budgeting" }
            ]
        }
    ];

    return (
        <div className='experience-container' id="experience">
            <Navbar />
            <div className="experience-content">
                <h1 className="experience-title">My Experience</h1>
                
                <div className="experience-sections">
                    <div className="section-group">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <button 
                                    className="experience-header"
                                    onClick={() => toggleSection(index)}
                                    aria-expanded={openSection === index}
                                >
                                    <div className="experience-title-group">
                                        <h3>{exp.title}</h3>
                                    </div>
                                    <span className={`arrow ${openSection === index ? 'open' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                <div className={`experience-details ${openSection === index ? 'open' : ''}`}>
                                    <ul>
                                        {exp.details.map((item, idx) => {
                                            if (item.type === "break") {
                                                return <li key={idx} className="break-item"></li>;
                                            } else if (item.type === "bold") {
                                                return <li key={idx} className="bold-item"><strong>{item.text}</strong></li>;
                                            } else if (item.type === "bullet") {
                                                return <li key={idx} className="bullet-item">{item.text}</li>;
                                            } else {
                                                return <li key={idx} className="normal-item">{item.text}</li>;
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;