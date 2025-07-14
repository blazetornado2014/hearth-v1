import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* Custom sanctuary colors */
				sanctuary: {
					glow: 'hsl(var(--sanctuary-glow))',
					earth: 'hsl(var(--sanctuary-earth))',
					forest: 'hsl(var(--sanctuary-forest))',
					twilight: 'hsl(var(--sanctuary-twilight))'
				},
				/* Spark element colors */
				spark: {
					electric: 'hsl(var(--spark-electric))',
					lightning: 'hsl(var(--spark-lightning))',
					violet: 'hsl(var(--spark-violet))',
					twilight: 'hsl(var(--spark-twilight))'
				},
				/* Loom element colors */
				loom: {
					blue: 'hsl(var(--loom-blue))',
					lavender: 'hsl(var(--loom-lavender))',
					ink: 'hsl(var(--loom-ink))',
					mist: 'hsl(var(--loom-mist))'
				},
				/* Path element colors */
				path: {
					emerald: 'hsl(var(--path-emerald))',
					starlight: 'hsl(var(--path-starlight))'
				},
				/* Forge element colors */
				forge: {
					charcoal: 'hsl(var(--forge-charcoal))',
					copper: 'hsl(var(--forge-copper))',
					earth: 'hsl(var(--forge-earth))',
					stone: 'hsl(var(--forge-stone))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-sanctuary': 'var(--gradient-sanctuary)',
				'gradient-twilight': 'var(--gradient-twilight)',
				'gradient-earth': 'var(--gradient-earth)',
				'gradient-spark': 'var(--gradient-spark)',
				'gradient-spark-bg': 'var(--spark-bg)',
				'gradient-loom': 'var(--gradient-loom)',
				'gradient-loom-bg': 'var(--loom-bg)',
				'gradient-loom-flow': 'var(--gradient-loom-flow)',
				'gradient-path': 'var(--gradient-path)',
				'gradient-path-bg': 'var(--path-bg)',
				'gradient-path-horizon': 'var(--gradient-path-horizon)',
				'gradient-forge': 'var(--gradient-forge)',
				'gradient-forge-bg': 'var(--forge-bg)',
				'gradient-forge-workshop': 'var(--gradient-forge-workshop)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))'
			},
			backgroundColor: {
				'spark-bg': 'hsl(var(--spark-bg))',
				'loom-bg': 'hsl(var(--loom-bg))',
				'path-bg': 'hsl(var(--path-bg))',
				'forge-bg': 'hsl(var(--forge-bg))'
			},
			boxShadow: {
				'sanctuary': 'var(--shadow-sanctuary)',
				'gentle': 'var(--shadow-gentle)'
			},
			transitionTimingFunction: {
				'sanctuary': 'cubic-bezier(0.23, 1, 0.32, 1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				/* Sanctuary animations */
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float-gentle': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						opacity: '0.5'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				/* Spark electric animations */
				'electric-pulse': {
					'0%, 100%': {
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'lightning-flicker': {
					'0%, 100%': {
						opacity: '0.8'
					},
					'10%': {
						opacity: '1'
					},
					'15%': {
						opacity: '0.6'
					},
					'25%': {
						opacity: '1'
					}
				},
				/* Loom flowing animations */
				'flow-gentle': {
					'0%': {
						transform: 'translateX(-100%) rotate(0deg)',
						opacity: '0'
					},
					'50%': {
						opacity: '0.6'
					},
					'100%': {
						transform: 'translateX(100%) rotate(180deg)',
						opacity: '0'
					}
				},
				'breathe': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.4'
					},
					'50%': {
						transform: 'scale(1.02)',
						opacity: '0.6'
					}
				},
				'settle': {
					'0%': {
						transform: 'translateY(-10px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				/* Path growing animations */
				'horizon-drift': {
					'0%': {
						transform: 'translateX(-50px)',
						opacity: '0.3'
					},
					'50%': {
						opacity: '0.7'
					},
					'100%': {
						transform: 'translateX(50px)',
						opacity: '0.3'
					}
				},
				'grow-gentle': {
					'0%': {
						transform: 'scale(0.98)',
						opacity: '0.5'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'path-emerge': {
					'0%': {
						strokeDashoffset: '100',
						opacity: '0'
					},
					'100%': {
						strokeDashoffset: '0',
						opacity: '0.6'
					}
				},
				/* Forge building animations */
				'forge-build': {
					'0%': {
						transform: 'scale(0.9) rotate(-2deg)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					}
				},
				'tool-rhythm': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-2px) rotate(1deg)'
					},
					'75%': {
						transform: 'translateY(-1px) rotate(-0.5deg)'
					}
				},
				'radiant-glow': {
					'0%, 100%': {
						boxShadow: '0 0 10px hsl(var(--forge-copper) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px hsl(var(--forge-copper) / 0.6)'
					}
				},
				'fade-in-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				/* Flame animations */
				'spark': {
					'0%': {
						transform: 'translateY(0) scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-50px) scale(1)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'electric-pulse': 'electric-pulse 2s ease-in-out infinite',
				'lightning-flicker': 'lightning-flicker 4s ease-in-out infinite',
				'flow-gentle': 'flow-gentle 8s ease-in-out infinite',
				'breathe': 'breathe 4s ease-in-out infinite',
				'settle': 'settle 0.8s ease-out',
				'horizon-drift': 'horizon-drift 12s ease-in-out infinite',
				'grow-gentle': 'grow-gentle 1s ease-out',
				'path-emerge': 'path-emerge 3s ease-out',
				'forge-build': 'forge-build 0.8s ease-out',
				'tool-rhythm': 'tool-rhythm 3s ease-in-out infinite',
				'radiant-glow': 'radiant-glow 2s ease-in-out infinite',
				'fade-in-scale': 'fade-in-scale 0.5s ease-out forwards',
				'spark': 'spark 1.5s ease-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
