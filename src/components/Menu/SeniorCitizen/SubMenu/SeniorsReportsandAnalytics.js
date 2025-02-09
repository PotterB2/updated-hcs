import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../../../templates/Sidebar';

const SeniorsReportsAndAnalytics = () => {
  const navigate = useNavigate(); // Create navigate function

  // Handler function for tab clicks
  const handleTabClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ 
        flex: 1, 
        padding: '20px', 
        marginLeft: '250px', 
        boxSizing: 'border-box', 
        overflow: 'hidden' 
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '30px', color: "#0B8769", marginLeft: '50px' }}>SENIOR CITIZEN REPORTS AND ANALYTICS</h2>
        
        {/* Tabs Section */}
        <div style={{ 
          marginBottom: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          marginLeft: '50px' // Align with header
        }}>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0, 
            display: 'flex', 
            alignItems: 'center',
            marginRight: 'auto' // Push tabs to the left
          }}>
            {[
              { label: 'Senior Citizen', path: '/seniorcitizen' },
              { label: 'Health Management', path: '/healthmanagement' },
              { label: 'Events & Activities', path: '/eventsandactivities' },
              { label: 'Social Service', path: '/socialservice' },
              { label: 'Benefits & Entitlements w/ Pension', path: '/benifitswithpension' },
              { label: 'Without Pension', path: '/benifitswithoutpension' },
              { label: 'Report and Analytics', path: '/seniorreportsandanalytics' }
            ].map((tab, index) => (
              <li
                key={index}
                onClick={() => handleTabClick(tab.path)}
                style={{ 
                  marginRight: '10px', 
                  cursor: 'pointer', 
                  padding: '10px 20px', 
                  borderRadius: '5px', 
                  backgroundColor: '#0B8769', // Updated background color
                  color: 'white', // Updated text color
                  textAlign: 'center', 
                  transition: 'background-color 0.3s, transform 0.3s', 
                  fontWeight: 'bold',
                  minWidth: '150px', // Uniform width
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0A6B5F'} // Hover effect
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0B8769'} // Reset hover effect
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <button style={{ 
            marginLeft: 'auto', // Aligns button to the right
            padding: '10px 20px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            + New Report
          </button>
          <input 
            type="text" 
            placeholder="Search reports" 
            style={{ padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc', marginLeft: '20px' }} 
          />
        </div>
        
        <div style={{ 
          overflowX: 'auto', 
          backgroundColor: '#fff', 
          borderRadius: '5px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
          maxWidth: 'calc(100% - 30px)', // Adjusted to prevent overflow
          marginLeft: '50px' // Align with tabs and header
        }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse', 
            minWidth: '600px', // Ensures the table is not too narrow
            marginLeft: '0' // Align the table with its container
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Report ID</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Senior Name</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Report Type</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Date</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Details</th>
                <th style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>R-000000{index + 1}</td>
                  <td style={{ padding: '12px' }}>Senior {index + 1}</td>
                  <td style={{ padding: '12px' }}>Health Report</td>
                  <td style={{ padding: '12px' }}>2024-09-01</td>
                  <td style={{ padding: '12px' }}>Summary of health metrics for Senior {index + 1}.</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button 
                      style={{ 
                        padding: '8px 12px', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        marginRight: '8px', 
                        cursor: 'pointer' 
                      }}>
                      Update
                    </button>
                    <button 
                      style={{ 
                        padding: '8px 12px', 
                        backgroundColor: '#f44336', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeniorsReportsAndAnalytics;
