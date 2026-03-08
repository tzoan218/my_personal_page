import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './HomePage.css';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function useCalendarGrid() {
  return useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const firstDayOfWeek = first.getDay();
    const daysInMonth = last.getDate();
    const startOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const prevMonth = new Date(year, month, 0);
    const prevDays = prevMonth.getDate();
    const cells = [];

    for (let i = 0; i < startOffset; i++) {
      cells.push({ day: prevDays - startOffset + i + 1, otherMonth: true });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d, otherMonth: false, today: d === today });
    }
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++) {
      cells.push({ day: d, otherMonth: true });
    }

    return {
      monthName: MONTHS[month],
      year,
      cells: cells.slice(0, 42),
      today
    };
  }, []);
}

function formatToday() {
  const d = new Date();
  const day = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

function HomePage() {
  const calendar = useCalendarGrid();
  const todayStr = formatToday();

  return (
    <div className="home-page">
      <h2 className="home-welcome-title">Welcome</h2>

      <div className="home-intro">
        <p>Hello and welcome.</p>
        <p>
          I am Ioanna Stamou, a researcher working across physics, software, and machine learning.
        </p>
        <p>
          This website presents my background, projects, and publications.
        </p>
        <p>
          You can also visit the <Link to="/about">About</Link> page to learn more about my work and experience.
          Visit my <Link to="/projects">Projects</Link> and <Link to="/publications">Publications</Link> to explore further.
        </p>
        <p>
          If you would like to see more about my work, you can also visit my <a href="https://github.com/tzoanphys" target="_blank" rel="noopener noreferrer">GitHub profile</a>.
        </p>
      </div>

      <div className="home-bottom-row">
        <section className="home-news-section">
          <h3 className="home-news-title">News</h3>
          <div className="home-news-box">
            <div className="home-news-box-date">{todayStr}</div>
            <h4 className="home-news-box-title">New project finished – Learning French</h4>
            <Link to="/projects" className="home-news-box-link">Look my project</Link>
          </div>
        </section>

        <div className="home-calendar-wrap">
          <div className="home-calendar">
            <div className="home-calendar-header">
              {calendar.monthName} {calendar.year}
            </div>
            <div className="home-calendar-grid">
              {WEEKDAYS.map((d) => (
                <div key={d} className="home-calendar-weekday">{d}</div>
              ))}
              {calendar.cells.map((cell, i) => (
                <div
                  key={i}
                  className={`home-calendar-day ${cell.otherMonth ? 'other-month' : ''} ${cell.today ? 'today' : ''}`}
                >
                  {cell.day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
