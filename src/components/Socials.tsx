import {
  RiCodeBlock,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiPagesFill,
} from "@remixicon/react";

const socials = [
  {
    title: "github",
    username: "@SunayKulkarni",
    link: "https://github.com/SunayKulkarni",
    icon: RiGithubFill,
  },
  {
    title: "linkedin",
    username: "Sunay Kulkarni",
    link: "https://www.linkedin.com/in/sunay-kulkarni-a252232a4/",
    icon: RiLinkedinBoxFill,
  },
  {
    title: "resume",
    username: "resume",
    link: "/resume3.pdf",
    icon: RiPagesFill,
  },

  {
  title: "leetcode",
  username: "SunayKulkarni-LeetCode",
  link: "https://leetcode.com/SunayKulkarni/",
  icon: RiCodeBlock,
},
  {
    title: "email",
    username: "sunaykulkarni17@gmail.com",
    link: "mailto:sunaykulkarni17@gmail.com",
    icon: RiMailFill,
  },
];

export default function Socials() {
  return (
    <div className="mb-16 text-white">
      <h2 className="text-2xl font-bold mb-8">
        <span className="text-orange-300">&gt;</span> Socials
      </h2>
      <div className="space-y-4">
        {socials.map((social) => (
          <div key={social.title} className="group">
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-green-300 transition-colors duration-200"
            >
              <social.icon size={20} />
              <span className="text-md">{social.username}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
