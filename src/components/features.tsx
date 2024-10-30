
import { MdOutlineCopyright, MdOutlineFileDownload } from "react-icons/md";
import { RiBrushLine, RiRefreshLine, RiRefund2Fill, RiTeamLine } from "react-icons/ri";

export const features = [
    {
        icon: <MdOutlineFileDownload color="var(--indigo-700)" />,
        title: "Infinite Download",
        description: `Once you subscribe to our plans, they're all yours. 
                      Download as many as you want and use them for work 
                      presentations, wallpapers, and much more.`,
    },
    {
        icon: <RiBrushLine color="var(--indigo-700)" />,
        title: "Purely Handcrafted",
        description: `No AI, no generic images. 
                      Crafted from various chemicals, fabrics, clouds, 
                      or even particles as small as dust.`,
    },
    {
        icon: <MdOutlineCopyright color="var(--indigo-700)" />,
        title: "All Are Under licensed",
        description: `The only limitation with these abstract images is
                      that you are not able to sell them in any form, 
                      whether digital or hard copy (such as paintings 
                      or prints on paper).`,
    },
    {
        icon: <RiRefund2Fill color="var(--indigo-700)" />,
        title: "Cancel Anytime",
        description: `Subscribe at your own pace, and cancel when you feel it's enough.`,
    },
    {
        icon: <RiTeamLine color="var(--indigo-700)" />,
        title: "Empowering For Team",
        description: `We support multiple seats at once, requiring only a single payment.`,
    },
    {
        icon: <RiRefreshLine color="var(--indigo-700)" />,
        title: "No Limitations",
        description: `Use as many as you want, from Dribbble presentations 
                      to PowerPoint presentations.`,
    },
];
