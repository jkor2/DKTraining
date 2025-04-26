/**
 * When adding videos
 * Required: id, title, description, youtube video ID
 * Simply append to end of the list, will dynamically render via the videopages component
 */
export const videoData = [
  {
    id: 1,
    title: "Getting Started with DiamondKast",
    description:
      "This DiamondKast Training video covers essential features such as logging in, filtering events and games, training games, and provides additional training materials through the DiamondKast Academy.",
    youtubeId: "BYNCsdumpI8",
  },
  {
    id: 2,
    title: "DiamondKast - Game Modes",
    description:
      "This DiamondKast Training video covers various game modes, including toggling pitch type tracking, pitch speed tracking, showcase mode, and tiebreaker mode.",
    youtubeId: "26wSmQldT1k",
  },
  {
    id: 3,
    title: "DiamondKast - Game Managment",
    description:
      "This DiamondKast Training video covers how to manage the game clock, track pitch count, end innings, and finalize the game properly.",
    youtubeId: "HYzmyd2uHvQ",
  },
  {
    id: 4,
    title: "DiamondKast - Scoring How To - 1",
    description:
      "This DiamondKast Training video covers how to record pitches, strikeouts, walks, batted outs, singles, and extra-base hits.",
    youtubeId: "XxC3TfRM3FU",
  },
  {
    id: 5,
    title: "DiamondKast - Scoring How To - 2",
    description:
      "This DiamondKast Training video covers ground out double plays, line drive double plays with a man doubled off first, and flyball double plays where a runner is thrown out at home.",
    youtubeId: "QyRUe8qLvtI",
  },
  {
    id: 6,
    title: "DiamondKast - Scoring How To - 3",
    description:
      "This DiamondKast Training video covers various game situations, including fielder's choices, batters reaching on error, stolen bases, caught stealing, pickoffs, wild pitches, and passed balls.",
    youtubeId: "Tvcj8l4uVyg",
  },
  {
    id: 7,
    title: "DiamondKast - Scoring How To - 4",
    description:
      "This DiamondKast Training video covers various scoring scenarios, including advances on throws, advances on errors, assigning multiple errors, base hit with runner out, sacrifice bunts, sacrifice fly outs, and recording a balk.",
    youtubeId: "e0rzdzO1hSE",
  },
  {
    id: 8,
    title: "DiamondKast - Batter Pre Pitch Plays",
    description:
      "This page covers the 'Batter Pre-Pitch' options, including Automatic Out, Illegal Action Without Pitch, Intentional Walk, and Skip Batter, which allow you to manage specific pre-pitch actions such as retiring the batter, advancing runners, or skipping the batter entirely.",
    youtubeId: "Under Maintence",
  },
  {
    id: 9,
    title: "DiamondKast - Deadball Plays",
    description:
      "This DiamondKast Training video covers dead ball plays, focusing on situations when the batter is either on or out. Topics include catcher's interference, umpire's interference, interference on the way to first base, hit by the batter's own batted ball, batter interference, and the infield fly rule.",
    youtubeId: "WrWwzmaeqqs",
  },
  {
    id: 10,
    title: "DiamondKast - Editing Plays",
    description:
      "This DiamondKast Training video walks through how to edit plays within the scoring app. Using examples like editing a triple, editing a single, and adjusting the score, we'll show how different plays offer different editing options. Every play type has its own editable fields, so for the best understanding, we encourage you to download the DiamondKast scoring app and try a Training Game yourself!",
    youtubeId: "hnpu8kQEksI",
  },
  {
    id: 11,
    title: "Determining Pitch Types",
    description:
      "This DiamondKast Training video teaches how to determine pitch types, including fastball (FB), curveball (CB), slider (SL), changeup (CH), knuckleball (KB), and others, as well as tracking velocity, movement, and identifying pitches.",
    youtubeId: "IOhIwvHUXDM",
  },
  {
    id: 12,
    title: "PG Website - Finding Event & Rules",
    description:
      "This DiamondKast Training video guides users on how to navigate the Perfect Game website, access events, locate event rules, and locating the pitching report.",
    youtubeId: "NNaYIHp35JQ",
  },
  {
    id: 13,
    title: "Setting up a Livestream",
    description:
      "This DiamondKast Training video demonstrates how to set up the stream by opening PG Broadcaster, selecting the field dropdown, finding the field, and starting the live broadcast.",
    youtubeId: "k4-t90hmScM",
  },
  {
    id: 14,
    title: "Setting up the stream box",
    description:
      "This DiamondKast Training video guides you through setting up the stream box, including hanging up the clamps, understanding the contents of the box, securing power, plugging in the phone and fan, setting the camera for optimal viewing of 3rd and 1st bases, and wrapping up the setup process.",
    youtubeId: "LtREc4hrzoY",
  },
  {
    id: 15,
    title: "Handling the Stalker Radar",
    description:
      "This DiamondKast Training video covers handling the Stalker Radar, including what's in the bag, setting up the radar, ensuring it’s properly charged (VERY IMPORTANT), checking charging status, understanding peak, range, and angle, and recalling data.",
    youtubeId: "ni14Xrz6XeU",
  },
  {
    id: 16,
    title: "Equipment Pricing Breakdown",
    description:
      "This DiamondKast Training video includes an equipment price breakdown, detailing items like the Stalker Radar Gun ($2,200), Apple iPad ($499), Streaming Phone ($599), and various accessories, urging users to treat the equipment like it's their own.",
    youtubeId: "SXrzsyHwBHA",
  },
  {
    id: 17,
    title: "Stat Corrections",
    description:
      "This DiamondKast Training video provides guidance on sending a stats change, including the proper email format with the subject line containing the date, age, and tournament name, and the body clearly describing the required change.",
    youtubeId: "khjuMklAscY",
  },
  {
    id: 18,
    title: "WhenIWork Basics",
    description:
      "This DiamondKast Training video series covers the basics of using WhenIWork, including confirming shifts with details like date, time, location, and how to get directions.",
    youtubeId: "2_5UWEEVhwM",
  },
  {
    id: 19,
    title: "DiamondKast Academy",
    description:
      "This DiamondKast Training video covers the features of DiamondKast Academy and how to use it effectively. DiamondKast Academy is the go-to resource for everything related to scoring while on site.",
    youtubeId: "Under Maintence",
  },
];

/**
 * When adding FAQs 
 * Required: question, answer
 * Just append to the end of the list. Will dynamically render via FAQS Page
 */
export const faqData = [
  {
    question: "How do I try a training game before my first shift?",
    answer: `Trying a training game is very simple! Go to your app store and search "DiamondKast Scoring App", download that and select "Try a Training Game" to practice! Here is a direct link to the app: <a href="https://apps.apple.com/us/app/diamondkast-scoring-app/id1519866089" target="_blank" rel="noopener noreferrer" style="color: white;">DiamondKast</a>`
  },
  
  {
    question: "What time should I arrive at my site?",
    answer:
      "You should arrive at least 60 minutes before the first scheduled game time. This will be marked in the WhenIWork app.",
  },
  {
    question: "Who do I contact if a team is late?",
    answer:
      "Immediately contact your Event Director or Assistant Event Coordinator for guidance.",
  },
  {
    question: "Who do I contact if an umpire is late?",
    answer:
      "Immediately contact your Event Director or Assistant Event Coordinator for guidance.",
  },
  {
    question: "Do I need to bring my own equipment?",
    answer:
      "No, all the equipment needed to perform the functions of a Field Manager will be provided.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring what you think you will need. Typically, this will include water, snacks & food, and the proper clothing for the day’s weather.",
  },
  {
    question: "What should I wear?",
    answer:
      "Wear comfortable clothing that is appropriate for the weather. If you have PG attire, you can wear that. Please do not wear any tank tops or open-toed shoes.",
  },
  {
    question: "DiamondKast or the Streaming Phone is not Logged, what do I do?",
    answer:
      "If one of your devices is not logged in, please ask your Event Director for the login details. They will be more than happy to provide you with them.",
  },
  {
    question: "I cannot make my shift, who do I contact?",
    answer:
      "We understand emergencies happen. If you cannot make the shift you are scheduled for, please notify the person who scheduled that shift for you. If you do not know who scheduled it, contact your Event Director or Assistant Event Coordinator for guidance.",
  },
  {
    question: "I cannot get into my NewTek account, who do I contact?",
    answer:
      "If you cannot get into your NewTek account, please reach out to your Event Director or Perfect Game contact for assistance.",
  },
  {
    question: "When does the clock start for the game?",
    answer:
      "The gameclock ticks upwards, meaning it starts from 0 and goes up to the games time limit. This is started on the first pitch of the game",
  },
  {
    question:
      "A Parent/Coach says the Pitchcount or Game Stats are incorrect, what do I do?",
    answer:
      "Direct the Parent/Coach to send an email to stats@perfectgame.org. Ensure they include the gameID and what exactly the issue is. If the pitch count is incorrect, let the director know so they can make a note of the situation to reduce the chance of a misunderstanding in future games of the event.",
  },
  {
    question:
      "A Parent/Coach says there is an incorrect highlight clip, what do I do?",
    answer:
      "When watching a highlight clip, at the bottom of the video there is an option to report an issue. Direct them to click on that and explain what the problem is. This will send an auto-generated ticket to the DK+ support team to fix.",
  },
  {
    question:
      "A Parent/Coach says they cannot see the livestream, what do I do?",
    answer:
      "In between innings, open up the steam box and check if the livestream is displaying live on the PG Broadcaster App. Sometimes the streaming phone will overheat or enter a rest mode. If this is the case, restart the stream. If the PG Broadcaster app is showing it is still live, contact the event director so they can get in contact with the live streaming team. If your field has a hardwired camera that automatically streams the games, get in contact with your event director.",
  },

  // Add more FAQs as needed
];

/**
 * When adding quick links
 * Required: Label, link (href), description 
 * Just append to end of list, will dynamically render via quick links page.
 */
export const quickLinks = [
  {
    label: "Perfect Game Events by Region",
    href: "https://www.perfectgame.org/Schedule/FeaturedGroups.aspx?PrtID=270",
    description:
      "Bring up the all events broken into their region, for quickly navigating to your event.",
  },
  {
    label: "DiamondKast Academy",
    href: "https://www.diamondkast.com/tutorials?section=welcome-slides",
    description:
      "Bring up the learn to score page, quickly search for a specific play to score.",
  },
  {
    label: "High School Rules",
    href: "https://docs.google.com/document/d/1xFVPjM3KSPNtGsmTMIe8ssc1TIwIBVmVKMysMAudpUk/edit?usp=sharing",
    description:
      "View the current High School rules for a Perfect Game event. Updated 4/15/2025.",
  },
  {
    label: "Youth Rules",
    href: "https://docs.google.com/document/d/1MYL_yzVFmDszPofIK6E9f8h3iz2ZmruPz00nFP_aU-E/edit?usp=sharing",
    description:
      "View the current Youth rules for a Perfect Game event. Updated 4/15/2025.",
  },
  {
    label: "High School Pitching Rules",
    href: "https://docs.google.com/document/d/1adUCoicH3_xET9nrceuTZv-FV-cPRz--t9nDkkTc7aY/edit?usp=sharing",
    description:
      "View the current High School Pitching rules for a Perfect Game event. Updated 4/15/2025.",
  },
  {
    label: "Youth Pitching Rules",
    href: "https://docs.google.com/document/d/1qdzg-k43krilbtOdBDoHB82jGiubtrYeNctHETPA2IE/edit?usp=sharing",
    description:
      "View the current Youth Pitching rules for a Perfect Game event. Updated 4/15/2025.",
  },
  {
    label: "PG-Training Field Manager Playlist",
    href: "https://www.youtube.com/watch?v=BYNCsdumpI8&list=PLv9RWYSrjeRyKgNnCUTpW9QNixw55wfht",
    description: "View all the videos on our Youtube Playlist.",
  },
  // Add more as needed
];

/**
 * When adding SOPs
 * Required Label, Description 
 * Just append to end of list, will dynamically render via the SOP page
 */
export const sopLinks = [
  {
    label: "Representing Perfect Game",
    description:
      "Field Manager's contracted by Perfect Game should represent the company well. We want to ensure our customers have a great experience at this event. Always be professional, courteous, and helpful. Whether you're interacting with coaches, players, or parents, your behavior reflects the values of Perfect Game. Treat everyone with respect and professionalism, as we aim to create a positive environment for all involved.",
  },
  {
    label: "Communicating with Directors",
    description:
      "Over-communicate — it's not only okay, it's appreciated.\n\nDirectors want to be kept in the loop at all times. If you're facing any issues, delays, or unexpected situations, reach out immediately. Even if everything is running smoothly at your assigned field, a quick message to let your Director know things are on track goes a long way. Consistent communication helps the entire event run more efficiently and ensures your team is always aligned.\n\nIf you do not know your event directors contact information, get in touch ASAP with who is giving you your schedule. They will be able to put you in touch. ",
  },
  {
    label: "Red Player on DiamonKast Lineup",
    description:
      "When a player is in red in DiamondKast, it means they have not yet signed a waiver. Follow these steps: \n\n1. Let the coach know their player is in red and ask them to get in touch with the parent to sign the waiver. \n2. Notify the Event Director or Assistant Event Coordinator, so they can go onto the website and re-send the waiver. \n3. Wait until either the coach or PG staff confirms that the player has signed the waiver. \n4. Refresh the app and insert the player into the lineup.",
  },
  {
    label: "Player not Showing up on DiamondKast Lineup",
    description:
      "This indicates the player is either pending PG approval or the coach did not add them to their roster on the Perfect Game website. Follow these steps: \n\n1. Get the player's full name (exact spelling will make this process go much faster). \n2. Contact the Event Director or Assistant Event Director, providing them with the game, team, and player details so they can add the player to the lineup. \n3. Wait until the PG staff confirms that the player is on the roster. \n4. Refresh the app and insert the player into the lineup.",
  },
  {
    label: "Home and Away are Swapped",
    description:
      "If the lineups are in and the home and away teams are swapped on DiamondKast, immediately contact the Event Director for a solution. You will need to stop scoring the game on DiamondKast, go to the 'Notes' application on the iPad or iPhone, and begin writing down what happened. This way, when the issue is fixed, the scoring can be caught up.",
  },
  {
    label: "DiamondKast Stopped Working",
    description:
      'If DiamondKast goes down for any reason, whether it be a bug, connection issue, or an unknown issue. Contact your director to see if they can resolve the issue. In the mean time, go to the "Notes" app on the iPad or iPhone and being noting what happens in the game.',
  },
  {
    label: 'Scoring with the "Notes" app, or with pen in paper.',
    description:
      "If the DiamondKast app goes down, your director may instruct you to begin scoring the game using the Notes app or with pen and paper. In this case, you should record three key items for each pitch: pitch type, pitch speed, and the result of the play. Keep your notes organized and easy to follow so the game can be accurately rescored later. Once the game is complete, send your notes to the director.",
  },
  {
    label: "International Tiebreaker Moder",
    description:
      "When the game goes into the International Tiebreaker rule, in the top left corner of DiamondKast, you will see the toggle of 3 horizontal lines stacked above each other. This is where we can change the game mode. Once the side menu is opened, select and confirm 'Tiebreak Mode.' \n\nThis will place the last three batters out on base, with one out. \n\nBring both coaches to home plate, explain the situation, and alert the coaches who will be on base to start the inning. (The names will be shown in DiamondKast.)",
  },
  {
    label: "Game Protests",
    description:
      "When a team wishes to file a protest during a game, it’s essential to confirm that the protest is not related to a judgment call (such as balls and strikes, safe/out calls, etc.), as judgment calls are not eligible for protest. \n\nSteps to follow: \n1. Before proceeding, confirm with the umpire that the coach is NOT protesting a judgment call. \n2. If it's confirmed that the protest is valid (not related to a judgment call), inform the coach that they must present $100 in cash for the protest to be considered. \n3. Immediately reach out to the Event Director or Assistant Event Coordinator on-site to assist with the protest process. They will help facilitate the protest and make a ruling. \n4. NOTE: Protests must be filed and ruled on before the next pitch if it’s during the game or before the umpires leave the field if it’s after the game. \n\nIf the protest is ruled in the protesting team’s favor, the $100 will be refunded. The ruling made by the committee is final.",
  },
  {
    label: "Ejections and Fights",
    description:
      "When there is an ejection that takes place, or a fight that is starting or has started, immediately contact the event director or assistant event coordinator. They will come to your field immediately to resolve the issue, escort people out as needed, or call the police. \n\nWe want to provide a safe environment for all participants, coaches, and spectators. Ensuring this is handled swiftly and professionally helps maintain the integrity and safety of the event.",
  },
  {
    label: "Stat Corrections",
    description:
      "If you are the person submitting a stat correction, you should reference the video provided in this training to use the correct template. \n\nIf a parent or coach wants to send in a stat correction, they must submit all required information to stats@perfectgame.org for processing.",
  },
  {
    label: "Possible Illegal Bats",
    description:
      "This must be called out by the coach when the player using the bat is at the plate. If it is called out at that time, have the umpire check the bat. If the umpire is unsure, alert the event director to perform a bat inspection.",
  },
  {
    label: "Im stuck, what do I do?",
    description:
      "If you're feeling stuck, overwhelmed, or unsure, simply call or text the Event Director or Assistant Event Coordinator on-site. They will do everything in their power to help you. These events run on teamwork—when everyone works as a cohesive unit, the event runs much more smoothly.",
  },
];
