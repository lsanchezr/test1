var DB = {};
DB = {
  nombre : 'Liliana',
  pate   : 'Sanchez',
  mate   : 'Romero',
  pelis  : {},
  logs   : {
  	"6-12-2017": {
  		"56": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 135,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:39:10 PM",
  			"first": "7:40:31 AM"
  		},
  		"57": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 36,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:28:43 PM",
  			"first": "10:16:32 AM"
  		},
  		"58": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:14:08 PM",
  			"first": "12:34:31 AM"
  		}
  	},
  	"7-23-2017": {
  		"143": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 96,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:24:20 PM",
  			"first": "8:38:14 AM"
  		}
  	},
  	"6-18-2017": {
  		"71": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 1,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "12:19:33 AM",
  			"first": "12:19:33 AM"
  		}
  	},
  	"6-26-2017": {
  		"86": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 23,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:50:52 PM",
  			"first": "9:10:43 AM"
  		},
  		"87": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 29,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:52:52 PM",
  			"first": "11:56:22 AM"
  		}
  	},
  	"5-23-2017": {
  		"9": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "304",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:57:22 PM",
  			"first": "8:15:19 AM"
  		},
  		"10": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "32",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:52:36 PM",
  			"first": "12:09:40 AM"
  		},
  		"11": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": "13",
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "2:00:12 PM",
  			"first": "12:11:30 AM"
  		}
  	},
  	"7-31-2017": {
  		"163": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 88,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:55:06 PM",
  			"first": "8:02:53 AM"
  		},
  		"164": {
  			"name": "TERESA NATALIA AMMLER CASTELLANOS",
  			"visits": 11,
  			"mail": "teresa.ammler@bbva.com",
  			"last": "1:20:46 PM",
  			"first": "10:13:16 AM"
  		},
  		"165": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:09:32 PM",
  			"first": "11:43:18 AM"
  		},
  		"166": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 3,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "4:31:30 PM",
  			"first": "4:31:19 PM"
  		}
  	},
  	"6-5-2017": {
  		"40": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 148,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:27:34 PM",
  			"first": "7:17:16 AM"
  		},
  		"41": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 2,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "12:09:17 AM",
  			"first": "10:06:55 AM"
  		}
  	},
  	"7-5-2017": {
  		"98": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 35,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "1:10:06 PM",
  			"first": "7:59:03 AM"
  		},
  		"99": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 18,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "3:23:49 PM",
  			"first": "10:35:05 AM"
  		},
  		"100": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 6,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:07:18 AM",
  			"first": "10:52:40 AM"
  		},
  		"101": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:23:32 PM",
  			"first": "4:23:32 PM"
  		}
  	},
  	"6-20-2017": {
  		"75": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 261,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:06:35 PM",
  			"first": "8:27:30 AM"
  		},
  		"76": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 45,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "7:36:45 PM",
  			"first": "10:39:30 AM"
  		},
  		"77": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 40,
  			"mail": "p.garcia3@bbva.com",
  			"last": "8:05:55 PM",
  			"first": "6:22:54 PM"
  		}
  	},
  	"7-15-2017": {
  		"128": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 4,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:32:20 PM",
  			"first": "12:28:13 AM"
  		}
  	},
  	"7-28-2017": {
  		"158": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 9,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:44:24 AM",
  			"first": "8:46:09 AM"
  		},
  		"159": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "2:27:36 PM",
  			"first": "9:11:17 AM"
  		},
  		"160": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 16,
  			"mail": "p.garcia3@bbva.com",
  			"last": "4:41:11 PM",
  			"first": "3:40:34 PM"
  		},
  		"161": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "4:41:19 PM",
  			"first": "4:40:33 PM"
  		}
  	},
  	"6-17-2017": {
  		"70": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 13,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:58:45 PM",
  			"first": "9:44:20 AM"
  		}
  	},
  	"7-4-2017": {
  		"95": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 13,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:24:52 PM",
  			"first": "9:08:21 AM"
  		},
  		"96": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 43,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "12:53:20 AM",
  			"first": "9:24:27 AM"
  		},
  		"97": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:13:07 PM",
  			"first": "5:13:07 PM"
  		}
  	},
  	"5-31-2017": {
  		"29": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 80,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:26:04 PM",
  			"first": "7:00:01 AM"
  		},
  		"30": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 143,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:41:36 PM",
  			"first": "12:27:51 AM"
  		},
  		"31": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 12,
  			"mail": "p.garcia3@bbva.com",
  			"last": "6:45:02 PM",
  			"first": "5:30:59 PM"
  		}
  	},
  	"6-11-2017": {
  		"54": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 146,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:42:50 PM",
  			"first": "12:00:13 AM"
  		},
  		"55": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "10:09:29 AM",
  			"first": "10:09:29 AM"
  		}
  	},
  	"7-30-2017": {
  		"162": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 29,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:35:34 PM",
  			"first": "5:53:54 PM"
  		}
  	},
  	"5-29-2017": {
  		"24": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 213,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:00:34 PM",
  			"first": "8:49:35 AM"
  		},
  		"25": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 64,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:03:52 PM",
  			"first": "9:59:19 AM"
  		}
  	},
  	"7-14-2017": {
  		"123": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 120,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:04:42 PM",
  			"first": "12:02:53 AM"
  		},
  		"124": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 5,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:14:56 AM",
  			"first": "9:05:32 AM"
  		},
  		"125": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 28,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:11:40 PM",
  			"first": "10:36:20 AM"
  		},
  		"126": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 13,
  			"mail": "p.garcia3@bbva.com",
  			"last": "6:51:52 PM",
  			"first": "12:23:28 AM"
  		},
  		"127": {
  			"name": "JOSELYN ALEXANDRA RUIZ ANGLES",
  			"visits": 1,
  			"mail": "joselynalexandra.ruiz.contractor@bbva.com",
  			"last": "3:40:51 PM",
  			"first": "3:40:50 PM"
  		}
  	},
  	"7-22-2017": {
  		"142": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 1,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:13:17 AM",
  			"first": "10:13:16 AM"
  		}
  	},
  	"8-3-2017": {
  		"174": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:23:59 AM",
  			"first": "10:23:59 AM"
  		},
  		"175": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "3:33:54 PM",
  			"first": "3:33:54 PM"
  		},
  		"176": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 1,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:34:54 PM",
  			"first": "3:34:54 PM"
  		}
  	},
  	"5-22-2017": {
  		"7": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "200",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:08:22 PM",
  			"first": "7:41:33 AM"
  		},
  		"8": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "8",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:26:26 PM",
  			"first": "4:01:01 PM"
  		}
  	},
  	"6-9-2017": {
  		"50": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 110,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:24:17 PM",
  			"first": "12:08:45 AM"
  		},
  		"51": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 11,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:39:59 PM",
  			"first": "11:03:15 AM"
  		},
  		"52": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 3,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "2:03:03 PM",
  			"first": "12:34:41 AM"
  		}
  	},
  	"6-3-2017": {
  		"39": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 9,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:06:18 PM",
  			"first": "12:27:23 AM"
  		}
  	},
  	"8-10-2017": {
  		"184": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 4,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:54:46 AM",
  			"first": "7:42:05 AM"
  		}
  	},
  	"5-28-2017": {
  		"23": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 221,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:52:36 PM",
  			"first": "12:17:07 AM"
  		}
  	},
  	"5-30-2017": {
  		"26": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 171,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:28:44 PM",
  			"first": "8:11:03 AM"
  		},
  		"27": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 13,
  			"mail": "p.garcia3@bbva.com",
  			"last": "8:04:46 PM",
  			"first": "3:31:48 PM"
  		},
  		"28": {
  			"name": "AARON DE LA CRUZ JIMENEZ",
  			"visits": 1,
  			"mail": "a.delacruzj@bbva.com",
  			"last": "3:51:02 PM",
  			"first": "3:51:01 PM"
  		}
  	},
  	"5-17-2017": {
  		"2": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "163",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:32:44 PM",
  			"first": "10:40:07 AM"
  		}
  	},
  	"5-25-2017": {
  		"16": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "240",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:26:04 PM",
  			"first": "12:00:30 AM"
  		},
  		"17": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": "20",
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:55:04 PM",
  			"first": "10:06:47 AM"
  		},
  		"18": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "97",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "7:45:25 PM",
  			"first": "10:30:05 AM"
  		}
  	},
  	"6-21-2017": {
  		"78": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 23,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "6:01:26 PM",
  			"first": "7:59:46 AM"
  		},
  		"79": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 42,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:36:08 PM",
  			"first": "11:37:43 AM"
  		}
  	},
  	"6-24-2017": {
  		"84": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 5,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:29:07 AM",
  			"first": "10:23:00 AM"
  		}
  	},
  	"6-10-2017": {
  		"53": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 85,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:58:57 PM",
  			"first": "7:15:14 AM"
  		}
  	},
  	"6-13-2017": {
  		"59": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 128,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:56:23 PM",
  			"first": "4:30:04 AM"
  		},
  		"60": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 82,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:50:03 PM",
  			"first": "9:30:11 AM"
  		},
  		"61": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 29,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:47:04 PM",
  			"first": "12:46:46 AM"
  		}
  	},
  	"6-16-2017": {
  		"68": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 3,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "1:49:59 AM",
  			"first": "12:18:41 AM"
  		},
  		"69": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 217,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "4:35:31 PM",
  			"first": "7:45:38 AM"
  		}
  	},
  	"6-19-2017": {
  		"72": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 256,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:44:26 PM",
  			"first": "7:08:41 AM"
  		},
  		"73": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 112,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "8:20:48 PM",
  			"first": "10:35:35 AM"
  		},
  		"74": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 30,
  			"mail": "p.garcia3@bbva.com",
  			"last": "8:38:39 PM",
  			"first": "6:41:21 PM"
  		}
  	},
  	"6-6-2017": {
  		"42": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 47,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:27:17 PM",
  			"first": "7:38:07 AM"
  		},
  		"43": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 14,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:40:40 PM",
  			"first": "9:12:17 AM"
  		},
  		"44": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "1:24:33 PM",
  			"first": "1:15:52 PM"
  		}
  	},
  	"6-27-2017": {
  		"88": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 4,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "9:23:55 AM",
  			"first": "8:55:27 AM"
  		},
  		"89": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 2,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:34:10 PM",
  			"first": "10:34:04 PM"
  		}
  	},
  	"8-9-2017": {
  		"183": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 5,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "2:56:17 PM",
  			"first": "9:43:38 AM"
  		}
  	},
  	"5-18-2017": {
  		"3": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "72",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "6:46:58 PM",
  			"first": "7:58:33 AM"
  		}
  	},
  	"7-26-2017": {
  		"152": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 85,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:47:38 PM",
  			"first": "8:19:33 AM"
  		},
  		"153": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 5,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:22:15 PM",
  			"first": "8:57:41 AM"
  		},
  		"154": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 18,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "7:59:57 PM",
  			"first": "4:00:24 PM"
  		},
  		"155": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 31,
  			"mail": "p.garcia3@bbva.com",
  			"last": "6:46:27 PM",
  			"first": "5:31:19 PM"
  		}
  	},
  	"6-29-2017": {
  		"90": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 1,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "1:11:47 PM",
  			"first": "1:11:47 PM"
  		}
  	},
  	"7-12-2017": {
  		"117": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 75,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:54:51 PM",
  			"first": "7:47:47 AM"
  		},
  		"118": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "8:52:25 AM",
  			"first": "8:52:25 AM"
  		},
  		"119": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:27:26 AM",
  			"first": "10:27:57 AM"
  		}
  	},
  	"7-20-2017": {
  		"137": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 102,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:54:13 PM",
  			"first": "8:32:11 AM"
  		},
  		"138": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 9,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:03:06 PM",
  			"first": "12:45:53 AM"
  		},
  		"139": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:02:11 PM",
  			"first": "4:02:11 PM"
  		}
  	},
  	"6-8-2017": {
  		"48": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 141,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:59:51 PM",
  			"first": "7:00:24 AM"
  		},
  		"49": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 1,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:15:13 AM",
  			"first": "11:15:13 AM"
  		}
  	},
  	"8-7-2017": {
  		"177": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 8,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:52:34 PM",
  			"first": "8:13:41 AM"
  		},
  		"178": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "11:58:38 AM",
  			"first": "9:28:49 AM"
  		},
  		"179": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "7:43:38 PM",
  			"first": "7:43:37 PM"
  		}
  	},
  	"5-20-2017": {
  		"5": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "114",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:46:06 PM",
  			"first": "1:30:26 AM"
  		}
  	},
  	"8-2-2017": {
  		"171": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 4,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:53:21 AM",
  			"first": "8:51:52 AM"
  		},
  		"172": {
  			"name": "TERESA NATALIA AMMLER CASTELLANOS",
  			"visits": 5,
  			"mail": "teresa.ammler@bbva.com",
  			"last": "9:34:23 AM",
  			"first": "8:57:56 AM"
  		},
  		"173": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:05:34 AM",
  			"first": "12:04:52 AM"
  		}
  	},
  	"6-2-2017": {
  		"35": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 120,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:08:39 PM",
  			"first": "5:09:01 AM"
  		},
  		"36": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:46:26 AM",
  			"first": "9:34:13 AM"
  		},
  		"37": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 4,
  			"mail": "p.garcia3@bbva.com",
  			"last": "11:34:04 AM",
  			"first": "11:32:08 AM"
  		},
  		"38": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 2,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:38:00 AM",
  			"first": "11:37:20 AM"
  		}
  	},
  	"6-23-2017": {
  		"82": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 24,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:44:24 PM",
  			"first": "9:29:17 AM"
  		},
  		"83": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 9,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "12:44:42 AM",
  			"first": "11:04:31 AM"
  		}
  	},
  	"6-15-2017": {
  		"65": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 202,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:15:48 PM",
  			"first": "6:58:59 AM"
  		},
  		"66": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 65,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:41:39 PM",
  			"first": "10:31:04 AM"
  		},
  		"67": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 12,
  			"mail": "p.garcia3@bbva.com",
  			"last": "5:05:26 PM",
  			"first": "4:18:38 PM"
  		}
  	},
  	"7-18-2017": {
  		"132": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 160,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:15:19 PM",
  			"first": "8:33:53 AM"
  		},
  		"133": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 3,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "11:46:29 AM",
  			"first": "11:39:38 AM"
  		}
  	},
  	"6-1-2017": {
  		"32": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 182,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:53:01 PM",
  			"first": "7:26:59 AM"
  		},
  		"33": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 4,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:06:30 PM",
  			"first": "10:06:10 AM"
  		},
  		"34": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 11,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:32:59 PM",
  			"first": "3:54:33 PM"
  		}
  	},
  	"7-11-2017": {
  		"114": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 242,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:57:47 PM",
  			"first": "12:10:10 AM"
  		},
  		"115": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 24,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:12:54 PM",
  			"first": "8:22:33 AM"
  		},
  		"116": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 21,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "8:13:42 PM",
  			"first": "9:05:48 AM"
  		}
  	},
  	"7-17-2017": {
  		"129": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 74,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "1:15:17 PM",
  			"first": "8:20:16 AM"
  		},
  		"130": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 5,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:44:45 AM",
  			"first": "9:40:33 AM"
  		},
  		"131": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "2:47:57 PM",
  			"first": "11:10:55 AM"
  		}
  	},
  	"6-14-2017": {
  		"62": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 131,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:25:14 PM",
  			"first": "12:00:09 AM"
  		},
  		"63": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 52,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:35:12 PM",
  			"first": "12:14:26 AM"
  		},
  		"64": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 8,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:05:43 AM",
  			"first": "8:28:26 AM"
  		}
  	},
  	"6-7-2017": {
  		"45": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 23,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:42:41 PM",
  			"first": "8:56:40 AM"
  		},
  		"46": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:58:27 AM",
  			"first": "9:58:27 AM"
  		},
  		"47": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 7,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:27:27 PM",
  			"first": "10:57:58 AM"
  		}
  	},
  	"7-7-2017": {
  		"105": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 25,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:36:20 PM",
  			"first": "9:14:37 AM"
  		},
  		"106": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 6,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:07:32 PM",
  			"first": "9:45:59 AM"
  		},
  		"107": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 16,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "12:31:30 AM",
  			"first": "9:50:47 AM"
  		},
  		"108": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "12:15:11 AM",
  			"first": "12:14:16 AM"
  		}
  	},
  	"7-8-2017": {
  		"109": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 7,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:48:44 PM",
  			"first": "11:33:06 PM"
  		}
  	},
  	"8-8-2017": {
  		"180": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 21,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "6:14:17 PM",
  			"first": "9:18:34 AM"
  		},
  		"181": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "1:27:26 PM",
  			"first": "1:27:26 PM"
  		},
  		"182": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:44:14 PM",
  			"first": "3:14:35 PM"
  		}
  	},
  	"7-25-2017": {
  		"147": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 60,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:09:47 PM",
  			"first": "9:10:25 AM"
  		},
  		"148": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 4,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:40:46 PM",
  			"first": "9:26:46 AM"
  		},
  		"149": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:01:48 AM",
  			"first": "10:01:48 AM"
  		},
  		"150": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 6,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "12:06:53 AM",
  			"first": "10:01:48 AM"
  		},
  		"151": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 11,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "7:09:59 PM",
  			"first": "11:09:45 AM"
  		}
  	},
  	"5-26-2017": {
  		"19": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 237,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:54:46 PM",
  			"first": "7:16:02 AM"
  		},
  		"20": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 6,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "1:24:23 PM",
  			"first": "9:15:37 AM"
  		},
  		"21": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 58,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:46:34 PM",
  			"first": "12:34:14 AM"
  		}
  	},
  	"8-1-2017": {
  		"167": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 107,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "5:47:29 PM",
  			"first": "8:25:17 AM"
  		},
  		"168": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:16:56 AM",
  			"first": "10:15:53 AM"
  		},
  		"169": {
  			"name": "TERESA NATALIA AMMLER CASTELLANOS",
  			"visits": 21,
  			"mail": "teresa.ammler@bbva.com",
  			"last": "5:23:07 PM",
  			"first": "12:45:49 AM"
  		},
  		"170": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 1,
  			"mail": "p.garcia3@bbva.com",
  			"last": "12:58:50 AM",
  			"first": "12:58:50 AM"
  		}
  	},
  	"7-9-2017": {
  		"110": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 151,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:20:11 PM",
  			"first": "00:32:58 AM"
  		}
  	},
  	"6-30-2017": {
  		"91": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 3,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "7:51:51 PM",
  			"first": "7:49:49 PM"
  		}
  	},
  	"7-6-2017": {
  		"102": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 336,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "2:37:07 PM",
  			"first": "1:05:21 AM"
  		},
  		"103": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 6,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:37:03 PM",
  			"first": "8:27:58 AM"
  		},
  		"104": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 20,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:15:39 PM",
  			"first": "9:54:22 AM"
  		}
  	},
  	"6-22-2017": {
  		"80": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 76,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:02:52 PM",
  			"first": "10:19:14 AM"
  		},
  		"81": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 12,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "4:49:11 PM",
  			"first": "2:31:50 PM"
  		}
  	},
  	"7-3-2017": {
  		"92": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 7,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:39:58 PM",
  			"first": "9:28:58 AM"
  		},
  		"93": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 16,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:51:28 PM",
  			"first": "12:08:19 AM"
  		},
  		"94": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 8,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:25:19 AM",
  			"first": "12:20:41 AM"
  		}
  	},
  	"7-10-2017": {
  		"111": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 183,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:48:05 PM",
  			"first": "8:05:50 AM"
  		},
  		"112": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 14,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:40:24 PM",
  			"first": "9:28:02 AM"
  		},
  		"113": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:50:08 PM",
  			"first": "11:04:52 AM"
  		}
  	},
  	"6-25-2017": {
  		"85": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 71,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "2:03:16 PM",
  			"first": "10:09:31 AM"
  		}
  	},
  	"7-13-2017": {
  		"120": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 98,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:49:25 PM",
  			"first": "8:26:53 AM"
  		},
  		"121": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 6,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "12:50:09 AM",
  			"first": "8:53:06 AM"
  		},
  		"122": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 8,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "4:34:02 PM",
  			"first": "11:23:40 AM"
  		}
  	},
  	"5-24-2017": {
  		"12": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "358",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:56:18 PM",
  			"first": "12:00:23 AM"
  		},
  		"13": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "21",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:20:04 PM",
  			"first": "9:30:47 AM"
  		},
  		"14": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "1",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "9:30:47 AM",
  			"first": "9:30:47 AM"
  		},
  		"15": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": "42",
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "11:28:03 PM",
  			"first": "1:33:56 PM"
  		}
  	},
  	"7-21-2017": {
  		"140": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 65,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:52:37 PM",
  			"first": "10:25:38 AM"
  		},
  		"141": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:41:23 AM",
  			"first": "10:41:23 AM"
  		}
  	},
  	"7-24-2017": {
  		"144": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 47,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "4:28:04 PM",
  			"first": "8:33:07 AM"
  		},
  		"145": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "9:27:20 PM",
  			"first": "10:28:36 AM"
  		},
  		"146": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:02:11 AM",
  			"first": "11:49:00 AM"
  		}
  	},
  	"5-19-2017": {
  		"4": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "283",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:56:35 PM",
  			"first": "8:14:35 AM"
  		}
  	},
  	"5-27-2017": {
  		"22": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 81,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:59:14 PM",
  			"first": "12:01:44 AM"
  		}
  	},
  	"7-27-2017": {
  		"156": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 134,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:54:18 PM",
  			"first": "8:29:25 AM"
  		},
  		"157": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:28:58 PM",
  			"first": "9:41:13 AM"
  		}
  	},
  	"5-16-2017": {
  		"1": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "46",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "5:21:18 PM",
  			"first": "9:49:59 AM"
  		}
  	},
  	"5-21-2017": {
  		"6": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "178",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:59:11 PM",
  			"first": "12:10:23 AM"
  		}
  	},
  	"7-19-2017": {
  		"134": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 162,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:27:25 PM",
  			"first": "6:14:58 AM"
  		},
  		"135": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:26:37 PM",
  			"first": "11:18:46 AM"
  		},
  		"136": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "11:50:56 AM",
  			"first": "11:50:55 AM"
  		}
  	}
  },
  who    : {
    sspgs: {
      0:{
        "name":"Joselyn Alexandra Ruiz Angeles",
        "id":"1",
        "mail":"joselynalexandra.ruiz.contractor@bbva.com",
        "edit":"SI"
      },
      1:{
        "name":"Manuel Sanchez Pau",
        "id":"2",
        "mail":"manuel.sanchez.pau.contractor@bbva.com",
        "edit":"SI"
      },
      2:{
        "name":"Norberto Lodela",
        "id":"3",
        "mail":"norberto.lopezdelara.contractor@bbva.com",
        "edit":"SI"
      },
      3:{
        "name":"Liliana Hernandez",
        "id":"4",
        "mail":"lilisanrom@gmail.com",
        "edit":"SI"
      },
      4:{
        "name":"Leonardo Vargas",
        "id":"5",
        "mail":"leonet4@gmail.com",
        "edit":"SI"
      }
    }
  },
  dataSet: [
    [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800',' ',' ',' ',' ',' ',' ',' '],
    [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750',' ',' ',' ',' ',' ',' ',' '],
    [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060',' ',' ',' ',' ',' ',' ',' '],
    [ 'Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700',' ',' ',' ',' ',' ',' ',' '],
    [ 'Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900',' ',' ',' ',' ',' ',' ',' '],
    [ 'Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600',' ',' ',' ',' ',' ',' ',' '],
    [ 'Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560',' ',' ',' ',' ',' ',' ',' '],
    [ 'Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600',' ',' ',' ',' ',' ',' ',' '],
    [ 'Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750',' ',' ',' ',' ',' ',' ',' '],
    [ 'Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450',' ',' ',' ',' ',' ',' ',' '],
    [ 'Doris Wilder', 'Sales Assistant', 'Sidney', '3023', '2010/09/20', '$85,600',' ',' ',' ',' ',' ',' ',' '],
    [ 'Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '5797', '2009/10/09', '$1,200,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575',' ',' ',' ',' ',' ',' ',' '],
    [ 'Jennifer Chang', 'Regional Director', 'Singapore', '9239', '2010/11/14', '$357,650',' ',' ',' ',' ',' ',' ',' '],
    [ 'Brenden Wagner', 'Software Engineer', 'San Francisco', '1314', '2011/06/07', '$206,850',' ',' ',' ',' ',' ',' ',' '],
    [ 'Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '2947', '2010/03/11', '$850,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Shou Itou', 'Regional Marketing', 'Tokyo', '8899', '2011/08/14', '$163,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Michelle House', 'Integration Specialist', 'Sidney', '2769', '2011/06/02', '$95,400',' ',' ',' ',' ',' ',' ',' '],
    [ 'Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Martena Mccray', 'Post-Sales support', 'Edinburgh', '8240', '2011/03/09', '$324,050',' ',' ',' ',' ',' ',' ',' '],
    [ 'Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675',' ',' ',' ',' ',' ',' ',' ']
  ],
  table  : function(){
    var table;
    // return(this.dataSet);
    $('#tableGet').DataTable({
      data   : this.dataSet,
      columns: [
        {title : 'ID'},
        {title : 'Desc'},
        {title : 'Edo Act/InAct'},
        {title : 'Campo a Validar'},
        {title : 'Tabla a Validar'},
        {title : 'Nom. WrkFlw'},
        {title : 'Cod. WrkFlw'},
        {title : 'Criticidad'},
        {title : 'Codición'},
        {title : 'F. Insert Regla'},
        {title : 'F. ultima Modificación'},
        {title : 'Usuario Ultima Modificación'},
        {title : 'Umbral Limite'}
      ],
      language : {
        'sProcessing'    :  'Procesando...',
        'sLengthMenu'    :  'Mostrar _MENU_ registros',
        'sZeroRecords'   :  'No se encontraron resultados',
        'sEmptyTable'    :  'Ningún dato disponible en esta tabla',
        'sInfo'          :  'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
        'sInfoEmpty'     :  'Mostrando registros del 0 al 0 de un total de 0 registros',
        'sInfoFiltered'  :  '(filtrado de un total de _MAX_ registros)',
        'sInfoPostFix'   :  '',
        'sSearch'        :  'Buscar:',
        'sUrl'           :  '',
        'sInfoThousands' :  ',',
        'sLoadingRecords':  'Cargando...',
        'oPaginate'      :  {
          'sFirst'     :  'Primero',
          'sLast'      :  'Último',
          'sNext'      :  'Siguiente',
          'sPrevious'  :  'Anterior'
        },
        'oAria': {
          'sSortAscending' : ': Activar para ordenar la columna de manera ascendente',
          'sSortDescending': ': Activar para ordenar la columna de manera descendente'
        }
      }
    });
    var tablePost_cols = [
      {title : 'ID'},
      {title : 'Desc'},
      {title : 'Edo Act/InAct'},
      {title : 'Campo a Validar'},
      {title : 'Tabla a Validar'},
      {title : 'Nom. WrkFlw'},
      {title : 'Cod. WrkFlw'},
      {title : 'Criticidad'},
      {title : 'Codición'},
      {title : 'F. Insert Regla'},
      {title : 'F. ultima Modificación'},
      {title : 'Usuario Ultima Modificación'},
      {title : 'Umbral Limite'}
    ];
    table = $('#tablePost').DataTable({
      bPaginate : true,
      sPaginationType: 'first_last_numbers',
      columns   : tablePost_cols,
      data      : this.dataSet,
      dom       : 'Bfrtip',
      select    : 'single',
      altEditor : true,
      order     : [[ 0, 'asc' ]],
      iDisplayLength: 10,
      buttons   : [{
        extend  : 'selected',
        text    : 'Editar',
        name    : 'edit'
      },{
        extend  : 'selected',
        text    : 'Borrar',
        name    : 'delete'
      }],
      bDestroy : true
    });
  }
}
var table = DB.table();
