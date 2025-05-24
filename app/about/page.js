import React from 'react';

const About = () => {
    return (
       <div className="text-white container mx-auto pb-10 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>

        <div className="w-[60%] grid grid-cols-2 ">
      

            <h2 className="text-2xl font-semibold mb-4">Benefits for Creators</h2>
            <ul className="list-disc mb-6">
                <li className="mb-2">Direct financial support from your fanbase</li>
                <li className="mb-2">Engage with your fans on a more personal level</li>
                <li className="mb-2">Access to a platform tailored for creative projects</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Fans</h2>
            <ul className="list-disc mb-6">
                <li className="mb-2">Directly contribute to the success of your favorite creators</li>
                <li className="mb-2">Exclusive rewards and perks for supporting creators</li>
                <li className="mb-2">Be part of the creative process and connect with creators</li>
                {/* Add more benefits */}
            </ul>

            {/* Additional sections */}
            <h2 className="text-2xl font-semibold mb-4">Benefits of Collaboration</h2>
            <ul className="list-disc mb-6">
                <li className="mb-2">Unlock new opportunities through collaboration with fellow creators</li>
                <li className="mb-2">Expand your network and reach a wider audience</li>
                <li className="mb-2">Combine skills and resources to create innovative projects</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
            <ul className="list-disc mb-6">
                <li className="mb-2">Interact with a supportive community of like-minded individuals</li>
                <li className="mb-2">Receive valuable feedback and encouragement from peers</li>
                <li className="mb-2">Participate in discussions and events centered around your interests</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Access to Resources</h2>
            <ul className="list-disc mb-6">
                <li className="mb-2">Gain access to resources such as tutorials, templates, and tools</li>
                <li className="mb-2">Receive guidance and mentorship from experienced creators</li>
                <li className="mb-2">Stay updated on industry trends and best practices</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Recognition and Exposure</h2>
            <ul className="list-disc mb-6">
                <li className="mb-2">Showcase your work to a global audience and gain recognition</li>
                <li className="mb-2">Feature in promotional materials and campaigns</li>
                <li className="mb-2">Build your portfolio and increase your credibility as a creator</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Supportive Community</h2>
            <ul className="list-disc mb-6">
                <li className="mb-2">Join a community that values creativity, diversity, and inclusivity</li>
                <li className="mb-2">Find encouragement and inspiration from fellow members</li>
                <li className="mb-2">Collaborate on projects and share resources for mutual growth</li>
                {/* Add more benefits */}
            </ul>

        </div>

          </div>
    );
}

export default About;

export const metadata = {
    title: "About - Cherify",
  }
   