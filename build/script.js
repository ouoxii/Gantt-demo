let tasks = [
    {
        id: 'Task 1',
        name: 'main',
        start: '2023-12-01',
        end: '2024-1-27',
        progress: 100,
    },
    {
        id: 'Task 2',
        name: 'Wu feature/updated-request-api',
        start: '2023-12-17',
        end: '2023-12-23',
        progress: 100,
        //dependencies: 'Task 1'
    },
    {
        id: 'Task 3',
        name: 'Chen feature/max-participants',
        start: '2023-12-17',
        end: '2023-12-25',
        progress: 100,
        //dependencies: 'Task 1'
    },
    {
        id: 'Task 4',
        name: 'Hung feature/adjust-modify-event-field',
        start: '2023-12-17',
        end: '2024-01-13',
        progress: 30,
        //dependencies: 'Task 1'
    },
    {
        id: 'Task 5',
        name: 'Sung feature/request-advance',
        start: '2023-12-17',
        end: '2023-12-20',
        progress: 100,
        //dependencies: 'Task 1'
    },

    {
        id: 'Task 6',
        name: 'Lin feature/admin-user-page',
        start: '2023-12-17',
        end: '2024-01-01',
        progress: 100,
        //dependencies: 'Task 1'
    },
    {
        id: 'Task 7',
        name: "Wu feature/user's-events-display",
        start: '2023-12-25',
        end: '2024-1-3',
        progress: 100,
        //dependencies: 'Task 1'
    },
    {
        id: 'Task 8',
        name: 'Chen feature/rollcall-fronted-end',
        start: '2023-12-29',
        end: '2024-1-13',
        progress: 80,
        //dependencies: 'Task 1'
    },
    {
        id: 'Task 9',
        name: 'Sung feature/report-comments',
        start: '2023-12-22',
        end: '2023-12-29',
        progress: 100,
        //dependencies: 'Task 1'
    }
]
let ganttChart = new Gantt("#gantt", tasks, {
    on_view_change: function (mode) {
        document.getElementById("current-timescale").innerText = mode;
    },
    custom_popup_html: function (task) {
        return `
          <div class="details-container" style="width:200px;margin: 10px">
            <h5>${task.name}</h5>
            <p>Task started on: ${task._start.getDate()}</p>
            <p>Expected to finish by ${task._end.getDate()}</p>
            <p>${task.progress}% completed!</p>
          </div>
        `;
    }
});


document.querySelector(".chart-controls #day-btn").addEventListener("click", () => {
    ganttChart.change_view_mode("Day");
})
document.querySelector(".chart-controls #week-btn").addEventListener("click", () => {
    ganttChart.change_view_mode("Week");
})
document.querySelector(".chart-controls #month-btn").addEventListener("click", () => {
    ganttChart.change_view_mode("Month");
})