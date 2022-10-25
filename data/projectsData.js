const ProjectsData = [
    {
        name: "E-Bike Frame",
        subtitle: "Yr3 Design Project",
        start: new Date(20, 8),
        end: new Date(21, 6),
        featured: false,
        type: "Engineering",
        technologies: ["Ansys", "Solidworks", "BikeCAD", "CES Selector"],
        thumbnail: {
            href: "/images/uniProjects/EBike/ebike_thumbnail.jpg",
            alt: "E-Bike Render"
        },
        media: [
            {
                type: "image",
                href: "/images/uniProjects/EBike/1_ebike_render.jpg",
                alt: "E-Bike Render 1"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/2_ebike_render.jpg",
                alt: "E-Bike Render 2"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/3_ebike_render.jpg",
                alt: "E-Bike Render 3"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/4_ebike_render.jpg",
                alt: "E-Bike Render 4"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/5_ebike_render.jpg",
                alt: "E-Bike Render 5"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/6_ebike_render.jpg",
                alt: "E-Bike Render 6"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/7_ebike_dimensions.jpg",
                alt: "E-Bike Dimensions"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/8_ebike_materials.jpg",
                alt: "E-Bike Materials"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/9_ebike_fea.jpg",
                alt: "E-Bike FEAA"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/10_ebike_rearwheel.jpg",
                alt: "E-Bike Rear Wheel"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/11_ebike_welding.jpg",
                alt: "E-Bike Welding"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/12_ebike_testsetup.jpg",
                alt: "E-Bike Test Setup"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/13_ebike_locations.jpg",
                alt: "E-Bike Strain Gauge Locations"
            },
            {
                type: "image",
                href: "/images/uniProjects/EBike/14_ebike_results.jpg",
                alt: "E-Bike Strains"
            },
        ],
        people: [
            {
                name: "Theo Hales",
                linkedin: "https://www.linkedin.com/in/theo-hales-a80132141/"
            },
            {
                name: "Mingquan Cheng",
                linkedin: "https://www.linkedin.com/in/mingquan-melvin-c-39957313b/"
            },
            {
                name: "Rohhil Chhabra",
                linkedin: "https://www.linkedin.com/in/rohhil-chhabra/"
            },
            {
                name: "Zhongtian Huang",
                linkedin: "https://www.linkedin.com/in/zhongtian-huang-808a61180/"
            },
        ],
        documents: [
            {
                type: "Poster",
                href: ""
            },
            {
                type: "Design Report",
                href: ""
            },
            {
                type: "Testing & Analysis Report",
                href: ""
            },
            {
                type: "Seminar Presentation",
                href: ""
            }
        ],
        description: "Worked with a group of third year mechanical engineering students to design, make, and test an urban electric bike from the ground up. Was specifically responsible for the engineering design, validation, manufacturing, and testing of the frame in a 5-member subgroup.\nThe bespoke geometry is designed around human anthropometrics under urban commuting conditions. In the most basic form, the frame is dual triangular in structure with silver brazed steel tubing. The cold-drawn, low-carbon Omnicom tubes provide high tensile strength, fatigue resistance and transition temperature. Each tube is butted for added thermal resistance near braze joints while saving material weight elsewhere.\nTo be compatible with disc brake callipers while having a chain-tensioning mechanism, custom sliding rear dropouts were designed. The three-piece design allows the entire rear wheel assembly to move horizontally without conflicting with other parts. Furthermore, motor and battery integrations were achieved through a square-sectioned seat tube and downtube for increased easier manufacturing.\nExtensive Finite Elements analysis and incremental load tests using strain gauges were used to iterate and validate the design."
    },
    {
        name: "Mine Rescue Buggy",
        subtitle: "Yr3 Embedded C for Microcontrollers Project",
        start: new Date(21, 2),
        end: new Date(21, 3),
        featured: false,
        type: "Hardware",
        technologies: ["C", "PIC Microcontroller"],
        thumbnail: {
            href: "/images/uniProjects/Buggy/buggy_thumbnail.jpg",
            alt: "Mine Rescue Buggy"
        },
        media: [
            {
                type: "image",
                href: "/images/uniProjects/Buggy/1_buggy_functionality.jpg",
                alt: "Mine Rescue Buggy 1"
            },
            {
                type: "image",
                href: "/images/uniProjects/Buggy/2_buggy_colourmap.jpg",
                alt: "Mine Rescue Buggy 2"
            },
            {
                type: "image",
                href: "/images/uniProjects/Buggy/3_buggy_colourlogic.jpg",
                alt: "Mine Rescue Buggy 3"
            },
            {
                type: "video",
                href: "/images/uniProjects/Buggy/4_buggy_colourcalib.mp4",
                alt: "Mine Rescue Buggy Video 1"
            },
            {
                type: "video",
                href: "/images/uniProjects/Buggy/5_buggy_turning_calib.mp4",
                alt: "Mine Rescue Buggy Video 2"
            },
            {
                type: "video",
                href: "/images/uniProjects/Buggy/6_buggy_demo.mp4",
                alt: "Mine Rescue Buggy Video 3"
            },
            {
                type: "video",
                href: "/images/uniProjects/Buggy/7_buggy_demo.mp4",
                alt: "Mine Rescue Buggy Video 4"
            },
        ],
        people: [
            {
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
        ],
        documents: [
            {
                type: "Repository",
                href: ""
            },
        ],
        description: "As part of the final project of the Embedded-C for Microcontrollers module, we developed an autonomous mine rescue robot. The buggy can navigate a conceptual mine using a set of instructions coded in coloured cards and return to its starting position - simulating a scenario of determining the location of trapped miners.\nEnjoy exploring the set of slides which explain the key functionalities and features of the buggy. Slides 4 onwards have calibration demos before a full demo run on the final slide.\nHardware: PIC18F67K40 microchip, Clicker-2 PCB, Tricolour LED, TCS3471 Colour Light-to-digital convertor, 3.7V 2000mA LiPo battery, DRV833RTY differential motor drivers.\nSix core functions: movement, colour-detection, lighting, memory, calibration, and a set of fail-safes."
    },
    {
        name: "Mobula Ray",
        subtitle: "Yr2 Design Week Project",
        start: new Date(20, 1),
        end: new Date(20, 1),
        featured: false,
        type: "Engineering",
        technologies: ["SolidWorks", "CES Selector"],
        thumbnail: {
            href: "/images/uniProjects/Mobula Ray/1_mobula_render.jpg",
            alt: "Mobula Ray Render 1"
        },
        media: [
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/1_mobula_render.jpg",
                alt: "Mobula Ray Render 1"
            },
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/2_mobula_render.jpg",
                alt: "Mobula Ray Render 2"
            },
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/3_mobula_render.jpg",
                alt: "Mobula Ray Render 3"
            },
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/4_mobula_render.jpg",
                alt: "Mobula Ray Render 4"
            },
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/5_mobula_render.jpg",
                alt: "Mobula Ray Render 5"
            },
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/6_mobula_ed.jpg",
                alt: "Mobula Ray Engineering Drawing 1"
            },
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/7_mobula_ed.jpg",
                alt: "Mobula Ray Engineering Drawing 2"
            },
            {
                type: "image",
                href: "/images/uniProjects/Mobula Ray/8_mobula_group.jpg",
                alt: "Mobula Ray Group Photo"
            },
        ],
        people: [
            {
                name: "Diederik Evanson",
                linkedin: "https://www.linkedin.com/in/diederik-e-348376129/"
            },
            {
                name: "Marie Obrowski Aguirre",
                linkedin: "https://www.linkedin.com/in/marie-obrowski-1112b6191/"
            },
            {
                name: "Iñigo Maruri Aldaz",
                linkedin: "https://www.linkedin.com/in/inigomaruri/"
            },
        ],
        documents: [
            {
                type: "Poster",
                href: ""
            },
        ],
        description: "Mobula ray is a personal underwater propulsion device rated for a depth of 15m. Powered by a dual-motor drive train and lithium-ion batteries, it is designed to have a battery life of 2hrs for an average speed of 2 kph.\nI worked with a highly talented team to complete the entire design process in one week, from the initial idea to the final engineering delivery. See our final pitching poster below."
    },
    {
        name: "2D Heat Diffusion Model",
        subtitle: "Yr2 Computing Project",
        start: new Date(20, 1),
        end: new Date(20, 1),
        featured: false,
        type: "Computing",
        technologies: ["Python"],
        thumbnail: {
            href: "/images/uniProjects/Heat Diffusion/heatmodel_thumbnail.jpg",
            alt: "2D Heat Diffusion Graph"
        },
        media: [
            {
                type: "video",
                href: "/images/uniProjects/Heat Diffusion/heatmodel.mp4",
                alt: "2D Heat Diffusion Graph Animation"
            },
        ],
        people: [
            {
                name: "Frederik Masure",
                linkedin: "https://www.linkedin.com/in/frederik-masure-a97415173/"
            },
        ],
        documents: [
            {
                type: "Report",
                href: ""
            },
        ],
        description: "Worked as a pair to perform a heat transfer analysis of a hot long rectangular rod being quenched in a cold fluid. Using python, we modelled the temperature distribution through the rod in the x - y directions, as it changes with time.\nA mixed composition of brick and steel (AISI 1010) was chosen for the rod, although this could be modified to fit any composition. The rod was long enough that the heat transfer along the longest length could be neglected, hence was modelled in two space dimensions, and time.\nThe location and area of the secondary material was chosen to be a small rectangle, slightly offset from the centre, however, could easily be adjusted to model different problems.\nWe assumed each section of the rod to have uniform density, uniform specific heat, and no internal heat generation. Overall, the model was described by a 3rd order parabolic partial derivative equation."
    },
    {
        name: "SONIC",
        subtitle: "Yr2 Design & Manufacture Project",
        start: new Date(19, 9),
        end: new Date(19, 11),
        featured: false,
        type: "Engineering",
        technologies: ["SolidWorks, Manufacturing"],
        thumbnail: {
            href: "public/images/uniProjects/Sonic/1_sonic_render.jpg",
            alt: "SONIC Render"
        },
        media: [
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/1_sonic_render.jpg",
                alt: "SONIC Render 1"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/2_sonic_render.jpg",
                alt: "SONIC Render 2"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/3_sonic_render.jpg",
                alt: "SONIC Render 3"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/4_sonic_render.jpg",
                alt: "SONIC Render 4"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/5_sonic_ed.jpg",
                alt: "SONIC Engineering Drawing 1"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/6_sonic_ed.jpg",
                alt: "SONIC Engineering Drawing 2"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/7_sonic_real.jpg",
                alt: "SONIC Manufactured 1"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/8_sonic_real.jpg",
                alt: "SONIC Manufactured 2"
            },
            {
                type: "video",
                href: "public/images/uniProjects/Sonic/9_sonic_run.mp4",
                alt: "SONIC Demo"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Sonic/10_sonic_me.jpg",
                alt: "SONIC Manufactured 3"
            },
        ],
        people: [
            {
                name: "James Lum",
                linkedin: "https://www.linkedin.com/in/james-lum-kh/"
            },
            {
                name: "Ionas Alexopoulos",
                linkedin: "https://www.linkedin.com/in/ionas-alexopoulos-8504b020b/"
            },
            {
                name: "Brindhiini Perera",
                linkedin: ""
            },
            {
                name: "Yilong Huang",
                linkedin: "https://www.linkedin.com/in/yilong-huang-6137281a7/"
            },
        ],
        documents: [
            {
                type: "Design Report",
                href: ""
            },
        ],
        description: "As part of a 5-member team, we designed, manufactured and tested a miniature motorised car to race against 30 other teams in the cohort. Sonic is an ultra light, rear-wheel-drive car featuring an all plastic spur gear drive transmission. Design elements were carefully considered to maximise the ease of manufacturing, reduce the race completion time and many other criteria. Find out more about the complete design and manufacturing journey down below."
    },
    {
        name: "Lift Door Transmission",
        subtitle: "Yr1 Drive Tranimission Project",
        start: new Date(19, 0),
        end: new Date(19, 2),
        featured: false,
        type: "Engineering",
        technologies: ["SolidWorks"],
        thumbnail: {
            href: "public/images/uniProjects/Lift Door/1_liftdoor.jpg",
            alt: "Lift Door Tranmission Render"
        },
        media: [
            {
                type: "image",
                href: "public/images/uniProjects/Lift Door/1_liftdoor.jpg",
                alt: "Lift Door Tranmission Render 1"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Lift Door/2_liftdoor.jpg",
                alt: "Lift Door Tranmission Render 2"
            },
            {
                type: "image",
                href: "public/images/uniProjects/Lift Door/3_liftdoor.jpg",
                alt: "Lift Door Tranmission Render 3"
            }
        ],
        people: [],
        documents: [
            {
                type: "Design Review Presentation",
                href: ""
            },
        ],
        description: "An individual project to design a drive transmission for a lift door, including the complete CAD assembly and engineering drawings.\nThe design features a two-step speed increase and converts rotary motor motion to double-acting linear motion."
    },
]