import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-blue-500 text-white mt-auto">
      <a href="https://www.linkedin.com/in/arya-bayati/" className="flex" target="_blank" rel="noreferrer">
        Arya <FaLinkedin className="ml-1"/>
      </a>
      <a href="https://www.linkedin.com/in/christianbolus/" className="flex" target="_blank" rel="noreferrer">
        Christian <FaLinkedin className="ml-1"/>
      </a>
      <a href="https://www.linkedin.com/in/spencer-v-peterson/" className="flex" target="_blank" rel="noreferrer">
        Spencer <FaLinkedin className="ml-1"/>
      </a>
      <a href="https://www.linkedin.com/in/james-lovell007/" className="flex" target="_blank" rel="noreferrer">
        James <FaLinkedin className="ml-1"/>
      </a>
    </div>
  );
}
