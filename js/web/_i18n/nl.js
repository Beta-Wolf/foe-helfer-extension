/*
 * **************************************************************************************
 *
 * Dateiname:                 nl.js
 * Projekt:                   foe-chrome
 *
 * erstellt von:              Daniel Siekiera <daniel.siekiera@gmail.com>
 * Translator:		      Bèta Wolf
 * erstellt am:	              09.02.20, 23:13h
 * zuletzt bearbeitet:        09.02.20, 23:13h
 *
 * Copyright © 2019
 *
 * **************************************************************************************
 */

let i18n = {
	"Local" : "nl-NL",
	"DateTime" : "D/M/YY HH:mm:ss",

	"Global" : {
		"BoxTitle": " <small><em>FoE Helper</em></small>"
	},

	"Boxes" : {
		"OwnpartCalculator" : {
			"Title": "Eigen GG FP-Calculator", //Todo: Check Translation
			"HelpLink": "https://foe-rechner.de/extension/index#Eigenanteilsrechner",
            "Step": "Niveau",
            "OldLevel": "Oud level",
			"PatronPart": "Externe bijdrage",
			"OwnPart": "Eigen bijdrage",
            "LGTotalFP": "Totaal aantal FP",
            "OwnPartRemaining": "Resterend",
			"Done": "Done",
			"BPs": "BD's",
			"Meds": "Meds",
			"Ext": "Gestort",
			"Arc": "Arc",
			"Order": "Posities",
			"Deposit": "Te storten",
			"CopyValues": "Kopieer waarden",
			"Note": "Onthouden",
			"YourName": "Jouw naam",
			"IndividualName": "Naam GG individueel",
			"OutputScheme": "Uitvoerschema",
            "Auto": "Auto",
            "Place": "Plaats",
            "Levels": "Levels",
            "NoPlaceSafe": "Geen plaats veilig"
		},

		"Calculator": {
			"Title": "FP-Calculator", //Todo: Check Translation
			"HelpLink": "https://foe-rechner.de/extension/index#Kostenrechner",
			"Step": "Niveau",
			"AvailableFP": "Beschikbare Forgepunten",
			"FriendlyInvestment": "Investeren met:",
			"ArcBonus": "Arc bonus",
			"Rate": "Verhouding",
			"Up2LevelUp": "Nog te storten",
			"FP": "FP",
			"Save": "Opslaan",
			"BPs": "BD's",
			"Meds": "Meds",
			"Commitment": "Kosten",
			"Profit": "Winst",
			"LevelWarning": "OPGELET! Dit zal het GG levelen!",
			"NoFPorMedsAvailable": "Geen FP's of BD's beschikbaar",
			"LGNotOpen": "Het volgende niveau is momenteel niet ontgrendeld",
			"LGNotConnected": "Het Groots gebouw is niet verbonden met een weg",
			"ActiveRecurringQuest": "Actieve herhalingsmissie:",
			"Done": "Klaar",
			"LevelWarningTT": "__fpcount__FP past niet in<br>Maximale bijdrage: __totalfp__FP",
			"NegativeProfitTT": "Positie is niet veiliggesteld. __fpcount__ additional FP moet nog gestort worden om veilig te stellen<br>Totaal om positie veilig te stellen: __totalfp__FP"
		},

		"LGOverviewBox": {
			"Title": "Mogelijke investeringen",
			"Tooltip": {
				"FoundNew": "nieuw gevonden",
				"FoundAgain": "herkend",
				"NoPayment": "tot nu toe geen bijdrage",
			},
			"Building": "Groots gebouw",
			"Level": "Level",
			"PayedTotal": "Betaald / Totaal",
			"Rate": "Verhouding",
			"Profit": "Winst",
			"NothingToGet": "Er valt niets te krijgen bij <strong>__player__</strong>"
		},

		"StrategyPoints" : {
			"Title" : "FP - Producties",
			"TotalFPs": "Totaal aantal FP's van alle gebouwen: ",
			"Amount": "Aantal",
			"FPBar" : "FP-Voorraad: ",
			"BuyableFP" : "Koopbaar: " //Todo: Check Translation
		},

		"Productions" : {
			"Title" : "Productieoverzicht",
			"SearchInput": "Zoek gebouw...",
			"Total" : "Totaal: ",
			"ModeGroups": "Groeperen",
			"ModeSingle": "Individueel",
			"Happiness": "Tevredenheid",
			"AdjacentBuildings": "Aangrenzende gebouwen",
			"Headings" : {
				"number" : "Aantal",
				"amount" : "Hoeveelheid",
				"earning" : "Voltooiing productie",
				"greatbuilding" : "Grootse gebouwen",
				"production" : "Productiegebouwen",
				"random_production" : "Willekeurige producties",
				"residential": "Woongebouwen",
				"decoration": "Decoraties",
				"street": "Wegen",
				"goods": "Goederengebouwen",
				"culture": "Culturele gebouwen",
				"main_building": "Stadhuis",
				"boost": "Boost", //Todo: Check Translation
				"all" : "Alle"
			}
		},

		"Neighbors" : {
			"Title" : "Producties van ",
			"ReadyProductions" : "Voltooide producties",
			"OngoingProductions" : "Lopende producties"
		},

		"Outpost" : {
			"Title" : "Goederen van de nederzetting",
			"TitleShort" : "Goederenoverzicht - ",
			"TitleBuildings" : "Gebouw",
			"TitleFree" : "Gratis",
			"DescRequired" : "Nodig",
			"DescInStock" : "Beschikbaar",
			"DescStillMissing" : "<span style='color:#29b206'>Overmaat</span> / <span style='color:#ef1616'>Tekort</span>",
			"ExpansionsSum" : "Uitbreidingen",
			"nextTile" : "Volgende uitbreiding",
			"tileNotPlanned" : "N/A",
			"infoLine" : "__runNumber__de run, Bonus x4 Kans: __chanceX4__%", //Todo: Check Translation
        },

        "Technologies": {
            "Title": "Onderzoekskosten voor",
            "Resource": "Benodigdheden", //Todo: Check Translation
            "DescRequired": "Aantal", //Todo: Check Translation
            "DescInStock": "Beschikbaar",
			"DescStillMissing": "<span style='color:#29b206'>Overmaat</span> / <span style='color:#ef1616'>Tekort</span>",
			"NoTechs": "Je hebt het einde van dit tijdperk bereikt",
            "Eras": {
                1: "Steentijd",
                2: "Bronstijd",
                3: "IJzertijd",
                4: "Vroege middeleeuwen",
                5: "Hoge middeleeuwen",
                6: "Late mideleeuwen",
                7: "Koloniale tijdperk",
                8: "Industriële tijdperk",
                9: "Progressieve tijdperk",
                10: "Moderne tijdperk",
                11: "Postmoderne tijdperk",
                12: "Hedendaagse tijdperk",
                13: "Morgen",
                14: "Toekomst",
                15: "Arctische toekomst",
                16: "Oceanische toekomst",
                17: "Virtuele toekomst",
                18: "Ruimtetijdperk: Mars",
                19: "Asteroïdengordel uit het ruimtetijdperk"
            }
        },

        "Campagne": {
            "Title": "Veroveringskosten voor ",
            "Reward": "Totale beloning ",
            "AlreadyDone": " Alreeds veroverd!",
            "Resource": "Benodigdheden", //Todo: Check Translation
            "DescRequired": "Aantal", //Todo: Check Translation
            "DescInStock": "Beschikbaar",
            "DescStillMissing": "<span style='color:#29b206'>Overmaat</span> / <span style='color:#ef1616'>Tekort</span>"
		},

		"EventList": {
			"Title": "Lijst van evenementmissies voor: ",
			"Desc": "Missie",
			"Reward": "Beloning",
            "Number": "Nr.",
			"Or": " of ",
			"And": " en ",
			"Upcoming": "Komende missies (Aantal kan variëren)", //Todo: Check Translation
			"Waiting": "Geen missies beschikbaar",
		},

        "Negotiation": {
            "Title": "Onderhandelingshulp",
            "WrongGoods": "Verkeerde goederen geselecteerd, maak de onderhandeling handmatig af",
            "TryEnd": "Geen beurten meer",
            "Canceled": "Onderhandeling is geannuleerd",
            "Success": "Success",
            "Chance": "Kans",
			"Person": "Persoon",
			"Average": "Hoeveelheid", //Todo: Check Translation
			"Costs": "Kosten:",
			"Round": "Poging",
			"Stock": "In voorraad:",
			"GoodsLow": "OPGELET: De goederenvoorraad is schaars",
			"GoodsCritical": "ATTENTION: De goederenvoorraad is bijna op",
			"DragDrop": "U kunt de pictogrammen van de gemiddelde weergave zelf herschikken via Drag&Drop om de volgorde van de eerste poging te bepalen.",
			"TableLoadError": "Fout bij het laden van de onderhandelingstabel"
        },

		"Settings" : {
			"Title" : "Instellingen",
			"Active" : "Geactiveerd",
			"Inactive" : "Inactief",
		},

		"Infobox" : {
			"Title" : "Info-venster",
			"Filter" : "Filter",
			"FilterGex" : "GE",
			"FilterAuction" : "Veiling",
			"FilterLevel" : "Level-Up",
			"FilterMessage" : "Bericht",
			"FilterGildFights" : "Gildegevechten",
			"FilterTrade" : "Handel",
			"ResetBox" : "Venster leegmaken",
			"Messages" : {
				"GEX" : "<strong>__player__</strong> heeft zojuist __points__ punten behaald in GE.",
				"LevelUp" : "__player__'s __building__ heeft niveau __level__ bereikt.<br>Je hebt plaats <strong>__rank__</strong> behaald en ontving <strong>__fps__</strong> FP's terug.",
				"Auction" : "'<strong>__player__</strong> heeft zonet __amount__ munten geboden.",
				"Trade" : "<strong>__player__</strong> heeft je aanbieding geaccepteerd.<br>Je hebt __needValue__ __need__ ontvangen voor __offerValue__ __offer__",
				"MsgBuilding" : "__building__ - Niveau __level__",
				"GildFightOccupied": "Provincie <span style=\"color:#ffb539\">__provinceName__</span> is veroverd door <span style=\"color:__attackerColor__;text-shadow: 0 1px 1px __attackerShadow__\">__attackerName__</span> en is vergrendeld tot __untilOccupied__"
			}
		},

		"Units" : {
			"Title": "Eenhedenoverzicht",
			"NextUnitsIn": "De volgende __count__ eenheden zullen aankomen binnen <span class=\"alca-countdown\"></span> om __harvest__ uur",
			"ReadyToLoot": "Klaar om te verzamelen!",
			"Proportionally": "Proportionally", //Todo: Check Translation
			"Quantity": "Aantal",
			"Unit": "Eenheid",
			"Status": "Status",
			"Attack": "Aanval",
			"Defend": "Verdediging",
			"NotFilled": "niet gevuld", //Todo: Check Translation
			"Bind": "Afhankelijk",
			"Unbind": "Onafhankelijk"
		},
		
		"CityMap": {
			"TitleSend": "Gegevens verzenden",
			"Desc1": "Om je stad te kunnen plannen, moeten we je gegevens overdragen naar foe-rechner.de",
			"Desc2": "<button class='btn-default' id='submit-data' onclick='CityMap.SubmitData()'>Verzenden</button>",
			"SubmitSuccess": "Gegevens zijn succesvol overgedragen ... Bezoek nu ",
			"WholeArea": "Volledige oppervlakte: ",
			"FreeArea": "Beschikbare oppervlakte: "
		},

		"Gildfights": {
			"Title": "Spelersoverzicht",
			"Player": "Speler",
			"Negotiations": "Onderhandelingen",
			"Fights": "Gevechten",
			"LastSnapshot": " - Laatste snapshot sinds __time__ ago",
		},

		"HiddenRewards": {
			"Title": "Incidenten",
			"Appears": "Verschijnt",
			"Disappears": "Verdwijnt",
			"NoEvents": "Geen incidenten aanwezig"
		}
	},

	"Menu" : {
		"Productions" : {
			"Title" : "Productieoverzicht",
			"Desc" : "Toont het huidige aantal van alle producties."
		},
		"Calculator" : {
			"Title" : "FP-Calculator",
			"Desc" : "Berekent voor jou alle plaatsen en bepaalt snipe-bare FP's",
			"Warning": "Gedeactiveerd: Open eerst een Groots gebouw van een andere speler!"
		},
		"OwnpartCalculator" : {
			"Title" : "Eigen GG FP-Calculator",
			"Desc" : "Stel een FP-betaalplan op, bereken de kosten en kopieer de waarden",
			"Warning": "Gedeactiveerd: open eerst een van je Grootse gebouwen!"
        },
        "Technologies": {
            "Title": "Technologieën",
            "Desc": "Bereken onderzoekskosten",
            "Warning": "Gedeactiveerd: Open eerst het onderzoeksmenu!"
        },
        "Campagne": {
            "Title": "Continentkaart",
            "Desc": "Overzicht van de benodigde grondstoffen",
        	"Warning" : "Gedeactiveerd: Bezoek eerst een provincie!"
		},
        "Event": {
            "Title": "Evenement Opdrachtenlijst",
            "Desc": "Overzicht van de huidige en komende missies"
		},
        "Negotiation": {
            "Title": "Onderhandelingshulp",
			"Desc": "Geeft nauwkeurige voorstellen voor onderhandelingen",
			"Warning": "Gedeactiveerd: Start eerst een onderhandeling!"
        },
		"Settings" : {
			"Title" : "Instellingen",
			"Desc" : "Hier zijn stel je een paar kleinigheden in"
		},
		"Chat" : {
			"Title" : "Gilde Live-Chat",
			"Desc" : "Chat met iedereen in real-time"
		},
		"Unit" : {
			"Title" : "Eenhedenoverzicht",
			"Desc": "Al jouw eenheden in een oogopslag",
			"Warning": "Druk eerst 1x op je \"Legerbeheer\" <br>knop \"U\"" //Todo: Check Translation
		},
		"Forum" : {
			"Title" : "Forum",
			"Desc" : "Heb je een vraag? Zit je iets dwars? Of misschien wil je gewoon praten ..."
		},
		"Ask" : {
			"Title" : "Vraag / Antwoord",
			"Desc" : "Weet je niet hoe iets werkt?<br>Neem een kijkje!"
		},
		"Bugs" : {
			"Title" : "Fouten / Wensen",
			"Desc" : "Iets werkt niet zoals het hoort of heb je een idee?"
		},
		"OutP" : {
			"Title" : "Nederzetting",
            "Desc": "Overview of the required resources",
            "DescWarningOutpostData": "<em id='outPW' class='tooltip-error'>Gedeactiveerd: Begin een nederzetting and herlaad het spel (F5)",
			"DescWarningBuildings" : "<em id='outPW' class='tooltip-error'>Gedeactiveerd: Bezoek eerst je nederzetting!<br></em>Overzicht van de benodigde grondstoffen"
		},
		"Info" : {
			"Title" : "Info-venster",
			"Desc" : "Toont je alle zaken die gebeuren op de \"achtergrond\"<br><em>Vult zich beetje bij beetje met info ...</em>"
		},
		"HiddenRewards": {
			"Title": "Incidenten",
			"Desc": "Overzicht van de incidenten in en rond je stad"
		},
		"Citymap": {
			"Title": "Stadsoverzicht",
			"Desc": "Een schematische weergave van je stad in bovenaanzicht"
		}
	},

	"Settings" : {
		"Version": {
			"Title" : "Versie",
			"DescDebug" : "<p>Extension <strong class='text-danger'>BETA</strong></p><a target='_blank' href='https://foe-rechner.de/extension/update?v=__version__&lang=__language__'>Changelog</a>",  // Todo: Translate: Translate
			"Desc" : "Chrome Extension Version",
			"PlayerId": "Spelers-ID:",
			"GuildId": "Gilde-ID:",
			"World": "Wereld:"
		},
		"GlobalSend": {
			"Title" : "Gegevensoverdracht naar foe-rechner.de",
			"Desc" : "Activeer dit onderdeel als je gegevens met je gilde wilt bijhouden. <br> Deactiveer het voor persoonlijk gebruik"
		},
		"SendTavernInfo": {
			"Title" : "M/O activiteit",
			"Desc" : "Activeer dit onderdeel als motivatie/opknap-gegevens verzonden mogen worden." //Todo: Check Translation
		},
		"SendGEXInfo": {
			"Title" : "GE evaluaties",
			"Desc" : "Wanneer u in de Gilde Expeditie klikt op de ranglijst of het bijdrage-overzicht, worden de gegevens verzonden"
		},
		"SendGildMemberLGInfo": {
			"Title" : "GG data van andere gildeleden",
			"Desc" : "Wanneer je andere gildeleden bezoekt, zal alle data van de Grootse gebouwen verzonden worden naar foe-rechner.de."
		},
		"ShowNeighborsGoods": {
			"Title" : "Buren plunderen",
			"Desc" : "Bij het bezoeken weergeven wat er geplunderd kan worden"
		},
		"SendInvestigations": {
			"Title" : "FP-bijdrages",
			"Desc" : "Bij het betreden van het 'Stadhuis'> 'Nieuws'> 'Grootse gebouwen' worden de FP-bijdrages verzonden"
		},
		"ShowTavernBadge": {
			"Title" : "Toon teller Taveerne Bonus",
			"Desc" : "Zodra een bonus in de taverne wordt geactiveerd, verschijnt een globale, verschuifbare teller"
		},
		"PreScanLGList": {
			"Title" : "Voorafgaande scan van het GG-overzicht",
			"Desc" : "Scant bij het openen van het GG-overzicht van een buur de Grootse gebouwen en bepaalt welke GG's gevuld kunnen worden. <br> <u> Opmerking: </u> Aangezien alleen de laatste plaatsen worden verzonden wanneer een GG wordt geopend, kan het resultaat dus verschillen. De scan is echter opgeslagen."
		},
		"AutomaticNegotiation": {
			"Title" : "Onderhandelingshulp",
			"Desc" : "Moet de onderhandelingshulp automatisch openen tijdens het onderhandelen en sluiten bij het annuleren?"
		},
		"ResetBoxPositions": {
			"Title" : "Venster coördinaten",
			"Desc" : "Moeten de coördinaten van alle vensters verwijderd worden?",
			"Button" : "Verwijderen!"
		},
		"MenuLength": {
			"Title" : "Lengte Menu",
			"Desc" : "Hoeveel pictogrammen mag het menu weergeven?<br> Leeg of \"0\" betekent maximaal aantal."
		},
		"ChangeLanguage": {
			"Title" : "Verander de taal",
			"Desc" : "Welke taal, in plaats van de herkende, moet worden gebruikt?",
			"Dropdown": {
				"nl": "Nederlands", // Dont translate!!!
				"de": "Deutsch", // Dont translate!!!
				"en": "English", // Dont translate!!!
				"fr": "Français", // Dont translate!!!
				"es": "Español", // Dont translate!!!
				"ru": "Русский", // Dont translate!!!
				"sv": "Svenska", // Dont translate!!!
				"cs": "Český", // Dont translate!!!
				"ro": "Română" // Dont translate!!!
			}
		}
	},

	"Eras": {
		"NoAge": "Geen tijdperk",
		"StoneAge": "Steentijd",
		"BronzeAge": "Bronstijd",
		"IronAge": "IJzertijd",
		"EarlyMiddleAge": "Vroege middeleeuwen",
		"HighMiddleAge": "Hoge middeleeuwen",
		"LateMiddleAge": "Late middeleeuwen",
		"ColonialAge": "Koloniale tijdperk",
		"IndustrialAge": "Industriële tijdperk",
		"ProgressiveEra": "Progressieve tijdperk",
		"ModernEra": "Moderne tijdperk",
		"PostModernEra": "Postmoderne tijdperk",
		"ContemporaryEra": "Hedendaagse tijdperk",
		"TomorrowEra": "Morgen",
		"FutureEra": "Toekomst",
		"ArcticFuture": "Arctische toekomst",
		"OceanicFuture": "Oceanische toekomst",
		"VirtualFuture": "Virtuele toekomst",
		"SpaceAgeMars": "Ruimtetijdperk: Mars"
	},

	"API" : {
		"UpdateSuccess" : "Succesvol geüpdatet",
		"GEXPlayer" : "De Gilde Expeditie Bijdragelijst is geüpdatet",
		"GEXChampionship" : "De Gilde Expeditie ranglijst is geüpdatet",
		"LGInvest" : "Je GG bijdrages zijn verzonden",
		"LGGildMember" : "__player__'s Grootse Gebouwen zijn toegevoegd"
	},

	"HiddenRewards": {
		"Positions": {
			"nature": "Natuur",
			"shore": "Kust",
			"water": "in het water",
			"cityRoadSmall": "kleine weg",
			"cityRoadBig": "grote weg",
			"guildExpedition": "Gilde Expeditie"
		},
		"Table": {
			"type": "Type",
			"position": "Positie",
			"expires": "Verloopt op"
		}
	}
};
