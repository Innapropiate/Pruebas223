//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.17.1

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "english"
// "brazilian_portuguese"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "logo.png"

// Text to be shown on logo
config.logo_text = "Comunidad Chronos"

// Use the server's name for the logo
config.logo_servername = true

// Center logo?
// "true" or "false"
config.logo_center = true

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = true

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = false

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = "purple_blue_rays.webm"

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"1.png",
	"2.png",
	"3.png",
	"4.png",
	"5.jpg",
	"6.jpg",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = false

// Display current music name?
// "true" or "false"
config.music_show = true

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "Etherno",
		youtube: "https://comunidadchronos.es/carga-hogw/music/etherno.ogg",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 25

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"¡Ten cuidado, los fantasmas acechan!",
	"ASODIAJSOIDASIDJAOISDJOIJ *coge aire* - Sora",
	"Donad, tenemos hambre - GmodStore",
	"Recuerda donar, sin ti, no somos nada. - PayPal y GMC", 
	"Recuerda disfrutar, respirar y pestañear! - Médico de Cabecera",
	"¿Te tarda en cargar el mapa? Normal, a mi también. - Jhonny Ethernal 2021",
	"No existen los errores, no ves ninguno - James Ethernal 2k21",
	"Nadie es perfecto, salvo nosotros. - Jhonny el Calvo",
	"Boom y llegó la guerra - Charlie",
	"NIIIIIIIIIIIIIIIIIIÑOS - Topo",
	"¡Ahora se pueden sentar cuatro maricones! - Ivan Sito",
	"¡TTTTTTTTTTTTTTTTTTTERIBLE! - Focus",
	"Recuerden cerrar las ventanas, pues ando con frío - Alfredo",
	"O a clase o la biblioteca - Prefecto Promedio",
	"¿Jugamos al Semáforo? Me he quedado sin color verde. - Las últimas palabras de un alumno",
	"Págame por el niño o lo convierto en kebab - Bandido Promedio",
	"Recuerda revisar el chat por si te alejan de rol - Staff Promedio",
	"¡Hoooooooola amiguitos del Staff! - Hecathe",
	"¡Nos abastecemos a base de streamers! - Comunidad Promedio",
	"Cuidado con el perro que muerde, en ocasiones se le ve volar.",
	"Cuidado con el Conserje, puede ser demasiado cariñoso.",
	"¿Tienes alguna duda?, Fondo Derecha - El chino",
	"Estás entrando a un servidor, ¿Qué te encontrarás dentro? - Usuario Promedio",
	"¿No tienes amigos? Te regalamos uno, se llama Mike. - JockeR dueño de la Comunidad 2021",
	"¿Nadie te ha dicho nunca que eres un pequeño hijo de puta? - JockeR 2021",
	
]

// Random message order?
// "true" or "false"
config.messages_random_order = true

// Delay between message changes
// in milliseconds
config.messages_delay = 5000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 1000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = false
