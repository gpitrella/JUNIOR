import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowLoading from '../../components/ShowLoading/ShowLoading';
import HallOfFameHeader from '../../components/HallOfFameHeader/HallOfFameHeader';
import HallOfFameRows from '../../components/HallOfFameRows/HallOfFameRows';
// import { clearHallOfFame, getHallOfFame } from '../../redux/action/hallOfFameActions';

import s from './HallOfFameView.module.css';

export default function HallOfFameView() {

  // const dispatch = useDispatch();
  // const { hallOfFame, loading } = useSelector((state) => state.hallOfFame);

  // React.useEffect(() => {
  //   dispatch(getHallOfFame());

  //   return (() => {
  //     dispatch(clearHallOfFame());
  //   })
  // }, []);
  const hallOfFame = [
		{
			id: 1,
			nickname: 'Rachel',
			status: 'FREE',
			ranking: 2.5,
			avatar: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=555',
			tech: ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
			github: "https://github.com/cosm1co",
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
        	github: "https://github.com/cosm1co",
        	email: "federicofaraz@gmail.com",
		},
		{
			id: 2,
			nickname: 'Ross',
			status: 'FREE',
			ranking: 1.5,
			avatar: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=555',
			tech: ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
        	email: "federicofaraz@gmail.com",
        	github: "https://github.com/cosm1co",
		},
		{
			id: 3,
			nickname: 'Phoebe',
			status: 'WORKING',
			ranking: 1.7,
			avatar: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=555',
			tech: ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
        	email: "federicofaraz@gmail.com",
        	github: "https://github.com/cosm1co",
    },
		{
			id: 4,
			nickname: 'Chandler',
			status: 'FREE',
			ranking: 3.6,
			avatar: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=555',
			tech: ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
        	email: "federicofaraz@gmail.com",
        	github: "https://github.com/cosm1co",
		},
		{
			id: 5,
			nickname: 'Joey',
			status: 'WORKIG',
			ranking: 0.5,
			avatar: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=555',
			tech: ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
        	email: "federicofaraz@gmail.com",
        	github: "https://github.com/cosm1co",
		},
		{
			id: 6,
			nickname: 'Monica',
			status: 'WORKIG',
			ranking: 4.8,
			avatar: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=555',
			tech: ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
        	email: "federicofaraz@gmail.com",
        	github: "https://github.com/cosm1co",
		},
		{
			id: 6,
			nickname: 'Monica',
			status: 'WORKIG',
			ranking: 4.8,
			avatar: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=555',
			tech: ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
			linkedin: "https://www.linkedin.com/in/federicofaraz-fullstack/",
        	email: "federicofaraz@gmail.com",
        	github: "https://github.com/cosm1co",
		  },
	  ]

  if (hallOfFame.length === 0) return (
    <div className = {s.loadingContainer}>
      <ShowLoading message = {"Loading"}/>
    </div>
  );

  return (
		<div id="componentHallOfFame"className = {s.container}>
		<HallOfFameRows players = {hallOfFame} />
		</div>
  );
}