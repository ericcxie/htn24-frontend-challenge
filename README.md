# Project Writeup: Hack The North 2024 Frontend Developer Challenge

## 1. Development Process

### Planning and Design

**Initial Approach**:
My initial approach before I started coding anything was to thoroughly understand the requirements of the project. I began by writing down all the essential requirements and various edge cases/considerations I needed to keep in mind. For example, what happens when an unauthorized user tries to access a private event? or what happens when an event field is empty? Only after fully understanding the requirements did I began to design the application.

**Design Choices**:
For the design part, I began by browsing different design websites like Dribble to look for inspirations I can use in my own project. This process is super important for my because it helps me build a mental image of the final application and subsequently helps me design the user flow as well. A critical design principle that guided my design/structure was simplicity. Hacker's are already sleep-deprived and stressed so the last thing they need is a messy and confusing UI :D.

After the UI/UX was planned, I used Draw.io to build a user flow chart that helped me plan out the different pages and the components on each of the page. This step is crucial because it makes the development process a lot more streamlined and less error-prone.

![HTN_Challenge drawio](https://github.com/ericcxie/htn24-frontend-challenge/assets/66566975/fc116251-c4d3-4791-9a76-c9e6cb2a28b1)

### Tools and Technologies

**Technology Stack**:

Since I was under a tight timeline, I decided to go with a tech stack that I was already familiar with and had built projects with before. This helped me save a lot of time on setting up the project and any broiler code I may require. It also allows me to use components I had built before which helps speed up the development time. Given more time, I probably would've liked to experiment with new tools/frameworks that I haven't worked with before.

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/>&nbsp;
<img src="https://img.shields.io/badge/Typescript-%2320232a.svg?style=for-the-badge&logo=typescript&logoColor=blue" alt="Typescript"/>&nbsp;
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>&nbsp;
<img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white" alt="Vercel"/>

### Challenges and Solutions

**Encountered Issues**:
One major challenge I faced while developing involved making sequential API calls. When I was developing the event details page (`EventDetails.tsx`), I initially designed it such that it would make a single call with the event ID at the start. However, each event data object contains an array of related event ID numbers with no corresponding information about those events. Since I didn't want to just display the numbers to the users, I needed some way to fetch the details of those related events as well. At first, my thought process was to store all the event information locally and query this data using the event IDs but this solution was inefficient considering the dynamic nature of the application. The solution I landed on was to chain the API calls. This meant that every time an event's details were requested, a subsequent API call would be triggered to fetch the details of the related events based on the IDs returned in the first call. This seemed to work pretty well in my testing so I'm happy with its results!

### Code Highlights

**Proud Achievements**:
One area of my code that I am proud of is its modularity given the time constraint that I was under. When I was development, I tried to make a conscious effort to encapsulate components into its own files whenever feasible. This helps improve the maintainability and organization of the code. Moreover, it enhances readability for other developers who may also work on this codebase in the future.

## 2. Extending the Application

### Feature Enhancements

**New Features**:
If I were to extend this application to become a fully functional product, there are several features that I would like to implement to improve the overall user experience. Since Hackathon Global is an international event with diverse people from all over the world, the first set of features I would focus on is accessibility.

- Dark mode
- Multiple language support
- Voice support
- High-contrast UI option

These features are crucial in ensuring that everyone is able to access the information easily. Some other features for the applications would include:

- Filter events
- Save events to custom lists
- Share event details
- Create user profiles

### Performance and Scalability

**Optimization Strategies**:
In terms of scalability and considerations to make when there are thousands of users, I would focus a lot on security since that is arguably one of the most important things for users. This means improving how users are authenticated and where their login information are saved. Realistically, there should be some sort of encryption that would be implemented for user data so that this information doesn't get leaked to hackers.

Moreover, the current implementation wouldn't scale too well for thousands of users. For example, a design choice I settled with given the time constraint was keeping the user's login state inside of `App.tsx` as this is straightforward and easy to implement. However, as the application grows, this approach can lead to "prop drilling" where you pass the state down through multiple components making the code harder to maintain. A more scalable solution would be to implement something like an AuthContext as it allows you to easily share state across multiple components without prop drilling.

## 3. Additional Thoughts

TBD...
