fetch("data.json")
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);

        // work
        const work = data[0];
        // current
        const work_day_cur = work.timeframes.daily.current;
        const work_week_cur = work.timeframes.weekly.current;
        const work_month_cur = work.timeframes.monthly.current;
        // prev
        const work_day_prev = work.timeframes.daily.previous;
        const work_week_prev = work.timeframes.weekly.previous;
        const work_month_prev = work.timeframes.monthly.previous;

        // play
        const play = data[1];
        // current
        const play_day_cur = play.timeframes.daily.current
        const play_week_cur = play.timeframes.weekly.current
        const play_month_cur = play.timeframes.monthly.current
        // previous
        const play_day_prev = play.timeframes.daily.previous
        const play_week_prev = play.timeframes.weekly.previous;
        const play_month_prev = play.timeframes.monthly.previous;

        // study
        const study = data[2];
        // current
        const study_day_cur = study.timeframes.daily.current
        const study_week_cur = study.timeframes.weekly.current
        const study_month_cur = study.timeframes.monthly.current
        // previous
        const study_day_prev = study.timeframes.daily.previous
        const study_week_prev = study.timeframes.weekly.previous;
        const study_month_prev = study.timeframes.monthly.previous;

        // exercise
        const exercise = data[3];
        // current
        const exercise_day_cur = exercise.timeframes.daily.current
        const exercise_week_cur = exercise.timeframes.weekly.current
        const exercise_month_cur = exercise.timeframes.monthly.current
        // previous
        const exercise_day_prev = exercise.timeframes.daily.previous
        const exercise_week_prev = exercise.timeframes.weekly.previous;
        const exercise_month_prev = exercise.timeframes.monthly.previous;

        // social
        const social = data[4];
        // current
        const social_day_cur = social.timeframes.daily.current
        const social_week_cur = social.timeframes.weekly.current
        const social_month_cur = social.timeframes.monthly.current
        // previous
        const social_day_prev = social.timeframes.daily.previous
        const social_week_prev = social.timeframes.weekly.previous;
        const social_month_prev = social.timeframes.monthly.previous;

        // self_care
        const self_care = data[5];
        // current
        const self_care_day_cur = self_care.timeframes.daily.current
        const self_care_week_cur = self_care.timeframes.weekly.current
        const self_care_month_cur = self_care.timeframes.monthly.current
        // previous
        const self_care_day_prev = self_care.timeframes.daily.previous
        const self_care_week_prev = self_care.timeframes.weekly.previous;
        const self_care_month_prev = self_care.timeframes.monthly.previous;


        let day = document.getElementById('day');
        day.addEventListener('click', () => {
            let day2 = document.querySelector('.day');
            day2.classList.add('active')

            document.getElementById('period').textContent = 'Yesterday';
            document.getElementById('period2').textContent = 'Yesterday';
            document.getElementById('period3').textContent = 'Yesterday';
            document.getElementById('period4').textContent = 'Yesterday';
            document.getElementById('period5').textContent = 'Yesterday';
            document.getElementById('period6').textContent = 'Yesterday';

            // work
            document.getElementById('work_cur').textContent = work_day_cur;
            document.getElementById('work_prev').textContent = work_day_prev;

            // play
            document.getElementById('play_cur').textContent = play_day_cur;
            document.getElementById('play_prev').textContent = play_day_prev;

            // study
            document.getElementById('study_cur').textContent = study_day_cur;
            document.getElementById('study_prev').textContent = study_day_prev;

            // exercise
            document.getElementById('exercise_cur').textContent = exercise_day_cur;
            document.getElementById('exercise_prev').textContent = exercise_day_prev;

            // social
            document.getElementById('social_cur').textContent = social_day_cur;
            document.getElementById('social_prev').textContent = social_day_prev;

            // self_care
            document.getElementById('self_care_cur').textContent = self_care_day_cur;
            document.getElementById('self_care_prev').textContent = self_care_day_prev;
        });


        let week = document.getElementById('week');
        week.addEventListener('click', () => {
            let week2 = document.querySelector('.week');
            week2.classList.add('active')

            document.getElementById('period').textContent = 'Last Week';
            document.getElementById('period2').textContent = 'Last Week';
            document.getElementById('period3').textContent = 'Last Week';
            document.getElementById('period4').textContent = 'Last Week';
            document.getElementById('period5').textContent = 'Last Week';
            document.getElementById('period6').textContent = 'Last Week';

            // work
            document.getElementById('work_cur').textContent = work_week_cur;
            document.getElementById('work_prev').textContent = work_week_prev;

            // play
            document.getElementById('play_cur').textContent = play_week_cur;
            document.getElementById('play_prev').textContent = play_week_prev;

            // study
            document.getElementById('study_cur').textContent = study_week_cur;
            document.getElementById('study_prev').textContent = study_week_prev;

            // exercise
            document.getElementById('exercise_cur').textContent = exercise_week_cur;
            document.getElementById('exercise_prev').textContent = exercise_week_prev;

            // social
            document.getElementById('social_cur').textContent = social_week_cur;
            document.getElementById('social_prev').textContent = social_week_prev;

            // self_care
            document.getElementById('self_care_cur').textContent = self_care_week_cur;
            document.getElementById('self_care_prev').textContent = self_care_week_prev;
        })
        let month = document.getElementById('month');
        month.addEventListener('click', () => {
            let month2 = document.querySelector('.month');
            month2.classList.add('active')

            document.getElementById('period').textContent = 'Last Month';
            document.getElementById('period2').textContent = 'Last Month';
            document.getElementById('period3').textContent = 'Last Month';
            document.getElementById('period4').textContent = 'Last Month';
            document.getElementById('period5').textContent = 'Last Month';
            document.getElementById('period6').textContent = 'Last Month';

            // work
            document.getElementById('work_cur').textContent = work_month_cur;
            document.getElementById('work_prev').textContent = work_month_prev;

            // play
            document.getElementById('play_cur').textContent = play_month_cur;
            document.getElementById('play_prev').textContent = play_month_prev;

            // study
            document.getElementById('study_cur').textContent = study_month_cur;
            document.getElementById('study_prev').textContent = study_month_prev;

            // exercise
            document.getElementById('exercise_cur').textContent = exercise_month_cur;
            document.getElementById('exercise_prev').textContent = exercise_month_prev;

            // social
            document.getElementById('social_cur').textContent = social_month_cur;
            document.getElementById('social_prev').textContent = social_month_prev;

            // self_care
            document.getElementById('self_care_cur').textContent = self_care_month_cur;
            document.getElementById('self_care_prev').textContent = self_care_month_prev;
        })
    })

