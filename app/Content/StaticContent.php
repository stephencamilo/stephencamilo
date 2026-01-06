<?php

namespace App\Content;

class StaticContent {
    /**
     * Get the content array for the Home page.
     *
     * @return array
     */
    public static function home(): array {
        return [
            'meta' => [
                'title' => 'Stephen Camilo | Senior PHP Developer | Drupal & WordPress Expert',
                'description' => 'Senior PHP Developer & Drupal Specialist. Expert in enterprise platforms, API integrations, and high-performance architecture.',
                'keywords' => 'PHP Developer, Drupal Expert, WordPress Specialist, Laravel, Full Stack Engineer, API Integration, Remote Developer',
                'robots' => 'index, follow',
                'viewport' => 'width=device-width, initial-scale=1, maximum-scale=5',
                'author' => 'Stephen Camilo',
                'canonical' => 'https://stephencamilo.com',

                // Open Graph
                'og' => [
                    'title' => 'Stephen Camilo | Senior PHP Developer',
                    'description' => 'Expert PHP developer specializing in Drupal, WordPress, and scalable solutions.',
                    'type' => 'website',
                    'image' => 'https://stephencamilo.com/assets/images/og-image.jpg',
                    'url' => 'https://stephencamilo.com',
                    'site_name' => 'Stephen Camilo Portfolio',
                    'locale' => 'en_US',
                    'image:width' => '1200',
                    'image:height' => '630',
                    'image:alt' => 'Stephen Camilo - Senior PHP Developer'
                ],

                // Twitter Card
                'twitter' => [
                    'card' => 'summary_large_image',
                    'title' => 'Senior PHP Developer',
                    'description' => 'Drupal & WordPress expert with extensive enterprise experience.',
                    'image' => 'https://stephencamilo.com/assets/images/twitter-image.jpg',
                    'site' => '@stephencamilo',
                    'creator' => '@stephencamilo'
                ],

                // AI/ML Specific Meta Tags
                'ai_generator' => 'Laravel, PHP, AI-Assisted Development',
                'ai_context' => 'senior-php-developer-portfolio',
                'ai_topic' => 'web-development, php-programming, drupal-cms',

                // ChatGPT/Claude specific
                'chatgpt_context' => 'technical-portfolio-php-developer',
                'claude_context' => 'professional-developer-profile',

                // Additional AI tags
                'ai_audience' => 'technical-recruiters, hiring-managers, developers',
                'ai_content_type' => 'portfolio, professional-profile',
                'ai_technical_level' => 'senior, expert',
                'ai_skills' => 'php,drupal,wordpress,laravel,api,devops',

                // Structured Data for AI/SEO
                'structured_data' => [
                    '@context' => 'https://schema.org',
                    '@type' => 'Person',
                    'name' => 'Stephen Camilo',
                    'url' => 'https://stephencamilo.com',
                    'jobTitle' => 'Senior PHP Developer',
                    'description' => 'Senior PHP Developer & Drupal Specialist with extensive enterprise experience.',
                    'skills' => [
                        'PHP',
                        'Drupal',
                        'WordPress',
                        'Laravel',
                        'JavaScript',
                        'API Development',
                        'DevOps'
                    ],
                    'knowsAbout' => [
                        'Web Development',
                        'PHP Programming',
                        'Drupal CMS',
                        'WordPress Development',
                        'API Integration',
                        'Database Optimization'
                    ],
                    'sameAs' => [
                        'https://linkedin.com/in/stephencamilo',
                        'https://github.com/stephencamilo'
                    ],
                    'worksFor' => [
                        '@type' => 'Organization',
                        'name' => 'Freelance / Contract'
                    ]
                ]
            ],

            'page_title' => 'Stephen Camilo | Senior PHP Developer',

            'hero' => [
                'scrollDownText' => 'Stephen Camilo',
                'slides' => [
                    'SENIOR PHP DEVELOPER',
                    'DRUPAL SPECIALIST',
                    'WORDPRESS EXPERT',
                    'FULL STACK ENGINEER'
                ],
                'cyclePagerTemplate' => '<span></span>'
            ],

            // ... rest of your content remains the same
            'menu' => [
                'logo' => "assets/images/logo-black.png",
                'items' => [
                    [
                        'text' => 'Home',
                        'href' => '#hero',
                        'class' => 'phantom'
                    ],
                    [
                        'text' => 'About',
                        'href' => '#about'
                    ],
                    [
                        'text' => 'Experience',
                        'href' => '#service'
                    ],
                    [
                        'text' => 'Skills',
                        'href' => '#work'
                    ],
                    [
                        'text' => 'Contact',
                        'href' => '#footer'
                    ]
                ]
            ],

            'services' => [
                'heading' => 'Professional Experience',
                'businessLevelText' => 'Expert developer delivering enterprise solutions internationally.',
                'loremIpsumText' => 'Proven track record building mission-critical systems: API integrations, marketplaces, transactional platforms.',
                'backgroundImage' => 'assets/images/parallax/1.jpg',
                'services' => [
                    [
                        'id' => 'service-data-1',
                        'icon' => 'ti-briefcase',
                        'title' => 'Senior Drupal Developer',
                        'description' => 'Led enterprise platform development, custom modules, performance optimization'
                    ],
                    [
                        'id' => 'service-data-2',
                        'icon' => 'ti-world',
                        'title' => 'Full Stack Engineer',
                        'description' => 'Drupal, WordPress, Laravel consulting and custom development for global clients'
                    ],
                    [
                        'id' => 'service-data-3',
                        'icon' => 'ti-thumb-up',
                        'title' => 'Software Engineer',
                        'description' => 'Enterprise solutions, agile collaboration, technical leadership'
                    ],
                    [
                        'id' => 'service-data-4',
                        'icon' => 'ti-pencil',
                        'title' => 'Full Stack Engineer',
                        'description' => 'Web applications, database architecture, API integration'
                    ],
                    [
                        'id' => 'service-data-5',
                        'icon' => 'ti-search',
                        'title' => 'Full Stack Developer',
                        'description' => 'Custom CMS development, full-stack integration'
                    ],
                    [
                        'id' => 'service-data-6',
                        'icon' => 'ti-settings',
                        'title' => 'PHP Developer',
                        'description' => 'Extensive expertise across projects and technologies'
                    ],
                ]
            ],

            'work' => [
                'headingText' => 'Technical Expertise',
                'imageBasePath' => 'assets/images/work/',
                'works' => [
                    [
                        'image' => '1.jpg',
                        'title' => 'Core Languages',
                        'subtitle' => 'PHP, JavaScript, SQL, Python',
                        'url' => '#',
                        'type' => 'skill'
                    ],
                    [
                        'image' => '2.jpg',
                        'title' => 'Frameworks & CMS',
                        'subtitle' => 'Drupal, WordPress, Laravel, React, Vue',
                        'url' => '#',
                        'type' => 'skill'
                    ],
                    [
                        'image' => '3.jpg',
                        'title' => 'DevOps & Tools',
                        'subtitle' => 'Docker, Git, CI/CD, Composer',
                        'url' => '#',
                        'type' => 'skill'
                    ],
                    [
                        'image' => '4.jpg',
                        'title' => 'Databases',
                        'subtitle' => 'MySQL, PostgreSQL, Redis, Performance tuning',
                        'url' => '#',
                        'type' => 'skill'
                    ],
                    [
                        'image' => '5.jpg',
                        'title' => 'API & Integrations',
                        'subtitle' => 'REST, GraphQL, OAuth, Payment gateways',
                        'url' => '#',
                        'type' => 'skill'
                    ],
                    [
                        'image' => '6.jpg',
                        'title' => 'Best Practices',
                        'subtitle' => 'Agile, TDD, SOLID, Design Patterns',
                        'url' => '#',
                        'type' => 'skill'
                    ],
                ]
            ],

            'skills' => [
                [
                    'name' => 'PHP Development',
                    'percentage' => 98
                ],
                [
                    'name' => 'Drupal CMS',
                    'percentage' => 95
                ],
                [
                    'name' => 'WordPress Development',
                    'percentage' => 92
                ],
                [
                    'name' => 'Laravel Framework',
                    'percentage' => 90
                ],
                [
                    'name' => 'JavaScript/React',
                    'percentage' => 88
                ],
                [
                    'name' => 'API Development',
                    'percentage' => 95
                ],
                [
                    'name' => 'MySQL Optimization',
                    'percentage' => 90
                ],
                [
                    'name' => 'Docker & DevOps',
                    'percentage' => 85
                ],
                [
                    'name' => 'Performance Tuning',
                    'percentage' => 92
                ],
                [
                    'name' => 'Security',
                    'percentage' => 90
                ],
                [
                    'name' => 'E-commerce',
                    'percentage' => 88
                ],
                [
                    'name' => 'Headless CMS',
                    'percentage' => 85
                ]
            ],

            'about' => [
                'title' => 'About Stephen Camilo',
                'subtitle' => 'Senior PHP Developer | Drupal Specialist | Full Stack Engineer',
                'paragraph1' => 'Expert developer building enterprise digital platforms. Specialized in scalable applications and API integrations.',
                'paragraph2' => 'Unique blend of technical execution, business strategy, and data-driven decisions.',
                'videoUrl' => 'https://vimeo.com/109777877',
                'image1' => 'assets/images/about/1.jpg',
                'image2' => 'assets/images/about/2.jpg',
                'image3' => 'assets/images/about/3.jpg',
                'altImage1' => 'Stephen Camilo - Senior PHP Developer',
                'altImage2' => 'Stephen Camilo discussing projects',
                'altImage3' => 'Stephen Camilo development work',
                'playButtonIcon' => 'ti-control-play',
            ],

            'footer' => [
                'logo' => 'assets/images/logo-white-footer.png',
                'background' => 'assets/images/parallax/4.jpg',
                'contact' => [
                    'email' => 'stephen.camilo@live.com',
                    'linkedin' => 'linkedin.com/in/stephencamilo',
                    'github' => 'github.com/stephencamilo',
                    'location' => 'Brazil — Remote & International',
                    'availability' => 'Open to global opportunities'
                ],
                'cta' => 'Need a Senior PHP Developer? Let\'s discuss.'
            ]
        ];
    }
}
