import IconLink from "./IconLink";
import LinkedInSVG from "../assets/linkedin.svg";
import GitHubSVG from "../assets/github.svg";

function Footer() {
    return (
        <div className="footer d-flex justify-content-center align-items-center gap-2 bg-body-secondary">
            {/* github link */}
            <IconLink link="https://github.com/atengelsgjerd" icon={GitHubSVG} alt="github" />

            {/* linkedin link */}

            <IconLink link="https://www.linkedin.com/in/alex-engelsgjerd/" icon={LinkedInSVG} alt="linkedin" />
        </div>
    )
}

export default Footer;