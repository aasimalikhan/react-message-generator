import './App.css'

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Input, Label, Textarea } from "@/components/ui";

export default function ReferralMessageGenerator() {
  const [name, setName] = useState("Harsh");
  const [jobId, setJobId] = useState("RP1031601");
  const [company, setCompany] = useState("f5 networks");
  const [jobRole, setJobRole] = useState("Engineer II - Software");
  const [resumeLink, setResumeLink] = useState("https://drive.google.com/file/d/1TAPfcS7dzi6FrPUwI6ODutWWbdUuubnv/view?usp=sharing");
  const [urls, setUrls] = useState({
    leetcode: "https://leetcode.com/u/snorlax1/",
    github: "https://github.com/aasimalikhan",
    gfg: "https://www.geeksforgeeks.org/user/bruhmantri/",
  });
  const [newLinks, setNewLinks] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddLink = () => {
    setNewLinks([...newLinks, { label: "", url: "" }]);
  };

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...newLinks];
    updatedLinks[index][field] = value;
    setNewLinks(updatedLinks);
  };

  const generateMessage = () => {
    const links = [
      `LeetCode: ${urls.leetcode}`,
      `GitHub: ${urls.github}`,
      `GeeksforGeeks: ${urls.gfg}`,
      ...newLinks.map(link => `${link.label}: ${link.url}`),
    ].filter(Boolean);

    const generatedMessage = `Hi ${name},

I hope you are doing well.
Could you please give me a referral for the ${jobRole} role at ${company}?
I think I am a great fit for this role.
The Job ID is ${jobId}. Here’s the job link for your reference: https://ffive.wd5.myworkdayjobs.com/f5jobs/job/Hyderabad/${jobRole.replace(/ /g, "-")}_${jobId}-1/apply?source=LinkedIn

This referral would greatly help me speed up the interview process.
About me:
My name is Aasim Ali Khan, and I have over 1.6 years of experience as a Technical Analyst 2 at Fiserv. Previously, I interned at Optum, where I worked on high-impact software development projects. I am proficient in technologies such as Java, Spring Boot, ReactJS, and Microservices, and have delivered solutions that enhance performance, optimize backend systems, and ensure scalability.

For additional details, you can also review my resume here: ${resumeLink}

Technical skills:
• Programming languages: Java, C++, JavaScript
• Frameworks and tools: Spring Boot, ReactJS, ASP.NET, PostgreSQL, Nodejs
• Achievements: Solved more than 1000+ problems on various online judge platforms.
• Profiles:
${links.join('\n')}
`;

    setMessage(generatedMessage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Referral Message Generator</h2>

        <div className="space-y-6">
          <div>
            <Label htmlFor="name">Recipients Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter recipient's name"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="jobRole">Job Role</Label>
            <Input
              id="jobRole"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="Enter job role"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="jobId">Job ID</Label>
            <Input
              id="jobId"
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
              placeholder="Enter job ID"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="resumeLink">Resume Link</Label>
            <Input
              id="resumeLink"
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
              placeholder="Enter resume link"
              className="mt-2"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Profile URLs</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="leetcode">LeetCode</Label>
                <Input
                  id="leetcode"
                  value={urls.leetcode}
                  onChange={(e) => setUrls({ ...urls, leetcode: e.target.value })}
                  placeholder="Enter your LeetCode profile URL"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  value={urls.github}
                  onChange={(e) => setUrls({ ...urls, github: e.target.value })}
                  placeholder="Enter your GitHub profile URL"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="gfg">GeeksforGeeks</Label>
                <Input
                  id="gfg"
                  value={urls.gfg}
                  onChange={(e) => setUrls({ ...urls, gfg: e.target.value })}
                  placeholder="Enter your GeeksforGeeks profile URL"
                  className="mt-2"
                />
              </div>

              {newLinks.map((link, index) => (
                <div key={index} className="space-y-2">
                  <div>
                    <Label>Custom Link Label</Label>
                    <Input
                      placeholder="Enter label"
                      value={link.label}
                      onChange={(e) => handleLinkChange(index, "label", e.target.value)}
                      className="mt-2 mb-1"
                    />
                    <Input
                      placeholder="Enter URL"
                      value={link.url}
                      onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={handleAddLink}
                className="mt-4 w-full sm:w-auto mx-auto"
              >
                Add New Link
              </Button>
            </div>
          </div>

          <Button
            onClick={generateMessage}
            className="w-full sm:w-auto mx-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Generate Message
          </Button>
        </div>

        {message && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Generated Message</h3>
            <Textarea value={message} readOnly className="w-full mb-4" rows={12} />
            <CopyToClipboard text={message}>
              <Button className="w-full sm:w-auto mx-auto">Copy to Clipboard</Button>
            </CopyToClipboard>
          </div>
        )
        }
      </div>
    </div>
  );
}
