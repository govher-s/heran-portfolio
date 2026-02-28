import React, { useState } from 'react';
import './projects.css';
import Navbar from '../homepage/navbar';

function Projects() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const projects = [
        {
            title: "Business Strategy & Analysis",
            details: [
                { type: "bullet", text: "Completed multiple business strategy case studies across retail, media, and service industries" },
                { type: "bullet", text: "Analyzed how companies compete using cost leadership, differentiation, and growth strategies" },
                { type: "bullet", text: "Created strategic group maps to compare firms based on key competitive dimensions" },
                { type: "bullet", text: "Applied tools such as the Ansoff Matrix and Balanced Scorecard to evaluate business performance and direction" },
                { type: "bullet", text: "Discussed how firms balance global efficiency and local responsiveness in international markets" }
            ]
        },
        {
            title: "Finance & Accounting",
            details: [
                { type: "bullet", text: "Analyzed company financial statements to understand profitability, efficiency, and solvency" },
                { type: "bullet", text: "Compared financial performance across companies using key ratios (ROA, ROE, margins, market ratios)" },
                { type: "bullet", text: "Evaluated how financial performance trends reflect business strategy and market conditions" },
                { type: "bullet", text: "Applied capital budgeting concepts (NPV, IRR, WACC) to investment decision scenarios" },
                { type: "bullet", text: "Completed cost accounting exercises including job costing, process costing, and ABC costing" }
            ]
        },
        {
            title: "Marketing",
            details: [
                { type: "bullet", text: "Studied customer segmentation and how firms identify and target different customer groups" },
                { type: "bullet", text: "Evaluated branding, positioning, and value propositions across industries" },
                { type: "bullet", text: "Applied the marketing mix (4Ps) to real companies and case examples" },
                { type: "bullet", text: "Analyzed digital and social media marketing strategies and customer engagement" },
                { type: "bullet", text: "Connected marketing decisions to overall business and competitive strategy" }
            ]
        },
        {
            title: "Business Ethics",
            details: [
                { type: "bullet", text: "Analyzed real-world business ethics cases involving leadership decisions and corporate responsibility" },
                { type: "bullet", text: "Examined ethical failures using stakeholder theory and governance frameworks" },
                { type: "bullet", text: "Discussed how ethical decision making impacts trust, reputation, and long term performance" },
                { type: "bullet", text: "Evaluated the balance between profitability, compliance, and social responsibility" }
            ]
        },
        {
            title: "Professional & Applied Experience",
            details: [
                { type: "bold", text: "Dakota BioWorx (DBX) - Business Development Support" },
                { type: "bullet", text: "Supported client outreach and relationship management using a CRM system (ActiveCampaign)" },
                { type: "bullet", text: "Researched potential partners in the biotech, food, and agriculture industries" },
                { type: "bullet", text: "Drafted professional outreach emails, LinkedIn messages, and follow-ups" },
                { type: "bullet", text: "Assisted with client onboarding materials, including NDAs and proposal support" },
                { type: "bullet", text: "Helped organize customer information and next steps to support internal discussions" },
                { type: "bullet", text: "Contributed to marketing content, including equipment and capability announcements" },
                { type: "break" },
                { type: "bold", text: "Finance & Administrative Experience - South Dakota State University" },
                { type: "bullet", text: "Interned with the Finance & Budget Office, supporting administrative and financial tasks" },
                { type: "bullet", text: "Assisted the Shared Services Center and Cashiers Office with daily operations" },
                { type: "bullet", text: "Helped draft clear, professional communication related to payments and internal processes" },
                { type: "bullet", text: "Coordinated across offices to support efficient workflow and service delivery" }
            ]
        },
        {
            title: "Leadership & Campus Involvement",
            details: [
                { type: "bullet", text: "Served as a Community Assistant (CA) supporting residents and addressing concerns" },
                { type: "bullet", text: "Helped plan and promote campus and multicultural events" },
                { type: "bullet", text: "Supported communication and engagement through organized messaging and event materials" }
            ]
        },
        {
            title: "Entrepreneurial & Creative Projects",
            details: [
                { type: "bold", text: "The Quiet Cup" },
                { type: "normal", text: "A coffee shop concept focused on a calm, study-friendly environment" },
                { type: "break" },
                { type: "bold", text: "Frosted Fantasies" },
                { type: "normal", text: "A custom bakery concept specializing in cakes and desserts" }
            ]
        }
    ];

    return (
        <div className='projects-container' id="projects">
            <Navbar />
            <div className="projects-content">
                <h1 className="projects-title">My Projects</h1>

                <div className="projects-sections">
                    <div className="section-group">
                        {projects.map((proj, index) => (
                            <div key={index} className="project-item">
                                <button
                                    className="project-header"
                                    onClick={() => toggleSection(index)}
                                    aria-expanded={openSection === index}
                                >
                                    <div className="project-title-group">
                                        <h3>{proj.title}</h3>
                                    </div>
                                    <span className={`arrow ${openSection === index ? 'open' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                <div className={`project-details ${openSection === index ? 'open' : ''}`}>
                                    <ul>
                                        {proj.details.map((item, idx) => {
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

export default Projects;