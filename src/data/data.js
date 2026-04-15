export const incidents = {

  "INC-001": {
    severity: "Critical",
    domain: "OT",
    status: "Open",
    incidentId: "INC-001",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "escalated",

    notifiedDepartments: ["soc", "processControl"],

    description:
      "Multiple unauthorized login attempts were detected targeting the SCADA control network.",

    affectedAssets: {
      OTEquipment: [
        { name: "SCADA-HMI-01", type: "Human Machine Interface", level: "CRITICAL" },
        { name: "PLC-DIST-03", type: "Programmable Logic Controller", level: "WARNING" }
      ],
      ITServices: [
        { name: "AUTH-SRV-02", type: "Authentication Server", level: "WARNING" }
      ]
    },

    timeline: [
      { time: "14:26", event: "Multiple failed login attempts detected", type: "alert" },
      { time: "14:27", event: "Intrusion detection alert triggered", type: "alert" },
      { time: "14:28", event: "Security operations team notified", type: "notification" },
      { time: "14:29", event: "Firewall rule automatically blocked IP", type: "defense" }
    ]
  },


  "INC-002": {
    severity: "Critical",
    domain: "IT",
    status: "Open",
    incidentId: "INC-002",
    title: "Firewall Breach Attempt",
    location: "Network Operations",
    time: "2:15 PM",
    assets: 3,
    escalated: "sent",

    notifiedDepartments: ["soc"],

    description:
      "Firewall logs indicate repeated port scanning attempts targeting refinery network services.",

    affectedAssets: {
      OTEquipment: [
        { name: "PLC-PIPE-07", type: "Pipeline Monitoring PLC", level: "WARNING" }
      ],
      ITServices: [
        { name: "FIREWALL-EDGE", type: "Firewall Infrastructure", level: "CRITICAL" }
      ]
    },

    timeline: [
      { time: "14:10", event: "Port scanning detected", type: "alert" },
      { time: "14:12", event: "Firewall generated anomaly alert", type: "alert" },
      { time: "14:13", event: "Automatic firewall mitigation enabled", type: "defense" }
    ]
  },


  "INC-003": {
    severity: "Critical",
    domain: "OT",
    status: "Open",
    incidentId: "INC-003",
    title: "Suspicious SCADA Network Traffic",
    location: "Control Network",
    time: "1:50 PM",
    assets: 4,
    escalated: "not escalated",

    notifiedDepartments: ["soc", "processControl"],

    description:
      "Unusual traffic patterns detected between SCADA nodes indicating possible lateral movement.",

    affectedAssets: {
      OTEquipment: [
        { name: "SCADA-GW-01", type: "SCADA Gateway", level: "WARNING" }
      ],
      ITServices: [
        { name: "IDS-NET-01", type: "Network IDS", level: "CRITICAL" }
      ]
    },

    timeline: [
      { time: "13:45", event: "Network anomaly detected", type: "alert" },
      { time: "13:46", event: "Internal traffic spike recorded", type: "alert" },
      { time: "13:47", event: "SCADA monitoring rules activated", type: "defense" }
    ]
  },


  "INC-004": {
    severity: "Critical",
    domain: "OT",
    status: "Open",
    incidentId: "INC-004",
    title: "Unauthorized Configuration Change",
    location: "Distillation Unit",
    time: "1:30 PM",
    assets: 2,
    escalated: "not escalated",

    notifiedDepartments: ["processControl", "maintenance"],

    description:
      "Configuration changes detected in the distillation PLC without authorized credentials.",

    affectedAssets: {
      OTEquipment: [
        { name: "PLC-DIST-CTRL", type: "Distillation PLC Controller", level: "CRITICAL" }
      ],
      ITServices: [
        { name: "SCADA-CONFIG", type: "SCADA Configuration Manager", level: "WARNING" }
      ]
    },

    timeline: [
      { time: "13:25", event: "PLC configuration modified", type: "alert" },
      { time: "13:27", event: "Configuration rollback initiated", type: "defense" }
    ]
  },


  "INC-005": {
    severity: "Critical",
    domain: "OT",
    status: "Open",
    incidentId: "INC-005",
    title: "Sensor Communication Failure",
    location: "Hydrotreating Unit",
    time: "12:55 PM",
    assets: 2,
    escalated: "not escalated",

    notifiedDepartments: ["processControl"],

    description:
      "Communication between temperature sensors and SCADA data aggregator was lost.",

    affectedAssets: {
      OTEquipment: [
        { name: "TEMP-SENS-09", type: "Temperature Sensor Node", level: "WARNING" }
      ],
      ITServices: [
        { name: "SCADA-DATA-01", type: "SCADA Data Aggregation Server", level: "MONITORING" }
      ]
    },

    timeline: [
      { time: "12:50", event: "Sensor data transmission stopped", type: "alert" },
      { time: "12:54", event: "Backup sensor activated", type: "defense" }
    ]
  },


  "INC-006": {
    severity: "Critical",
    domain: "IT",
    status: "Open",
    incidentId: "INC-006",
    title: "Network Latency Spike",
    location: "Industrial Network",
    time: "12:20 PM",
    assets: 3,
    escalated: "not escalated",

    notifiedDepartments: ["soc"],

    description:
      "Unexpected latency spike detected across refinery control network.",

    affectedAssets: {
      OTEquipment: [
        { name: "SCADA-GATEWAY", type: "SCADA Gateway", level: "WARNING" }
      ],
      ITServices: [
        { name: "IND-ROUTER-01", type: "Industrial Network Router", level: "MONITORING" }
      ]
    },

    timeline: [
      { time: "12:18", event: "Network latency spike detected", type: "alert" },
      { time: "12:20", event: "Traffic rerouted through secondary gateway", type: "defense" }
    ]
  },


  "INC-007": {
    severity: "Critical",
    domain: "IT",
    status: "Open",
    incidentId: "INC-007",
    title: "Unauthorized Remote Login",
    location: "Maintenance Terminal",
    time: "11:45 AM",
    assets: 2,
    escalated: "not escalated",

    notifiedDepartments: ["soc", "maintenance"],

    description:
      "Remote login attempt detected from an unrecognized device attempting to access maintenance terminal.",

    affectedAssets: {
      OTEquipment: [
        { name: "PLC-MAINT-01", type: "Maintenance PLC Interface", level: "WARNING" }
      ],
      ITServices: [
        { name: "AUTH-GATEWAY", type: "Authentication Gateway", level: "CRITICAL" }
      ]
    },

    timeline: [
      { time: "11:42", event: "Remote login attempt detected", type: "alert" },
      { time: "11:43", event: "Authentication attempt blocked", type: "defense" }
    ]
  }

};



export const departments = {

  soc: {
    id: "soc",
    name: "Security Operations Center",
    defaultEmail: "soc@refinery.com",

    members: [
      {
        id: "SOC-001",
        name: "Sarah Mitchell",
        role: "SOC Analyst",
        email: "sarah.mitchell@refinery.com"
      },
      {
        id: "SOC-002",
        name: "John Davis",
        role: "SOC Manager",
        email: "john.davis@refinery.com"
      }
    ]
  },

  processControl: {
    id: "processControl",
    name: "Process Control",
    defaultEmail: "process-control@refinery.com",

    members: [
      {
        id: "PC-001",
        name: "Arjun Mehta",
        role: "SCADA Engineer",
        email: "arjun.mehta@refinery.com"
      },
      {
        id: "PC-002",
        name: "Riya Sharma",
        role: "Control Systems Engineer",
        email: "riya.sharma@refinery.com"
      }
    ]
  },

  maintenance: {
    id: "maintenance",
    name: "Maintenance",
    defaultEmail: "maintenance@refinery.com",

    members: [
      {
        id: "MT-001",
        name: "Vikram Singh",
        role: "Maintenance Supervisor",
        email: "vikram.singh@refinery.com"
      },
      {
        id: "MT-002",
        name: "Neha Kapoor",
        role: "Reliability Engineer",
        email: "neha.kapoor@refinery.com"
      }
    ]
  }

};

export const assets = {

  "SCADA-HMI-01": {
    id: "SCADA-HMI-01",
    name: "SCADA HMI Terminal",
    type: "HMI",
    domain: "OT",
    location: "Control Room",
    criticality: "CRITICAL"
  },

  "PLC-DIST-03": {
    id: "PLC-DIST-03",
    name: "Distillation PLC Controller",
    type: "PLC",
    domain: "OT",
    location: "Distillation Unit",
    criticality: "HIGH"
  },

  "RTU-TANK-12": {
    id: "RTU-TANK-12",
    name: "Tank Monitoring RTU",
    type: "RTU",
    domain: "OT",
    location: "Tank Farm",
    criticality: "HIGH"
  },

  "ENG-WS-045": {
    id: "ENG-WS-045",
    name: "Engineering Workstation",
    type: "Workstation",
    domain: "OT",
    location: "Control Room",
    criticality: "MEDIUM"
  },

  "AUTH-SRV-02": {
    id: "AUTH-SRV-02",
    name: "Authentication Server",
    type: "Server",
    domain: "IT",
    location: "Data Center",
    criticality: "HIGH"
  },

  "SEC-MON-01": {
    id: "SEC-MON-01",
    name: "Security Monitoring Platform",
    type: "SIEM",
    domain: "IT",
    location: "SOC",
    criticality: "MEDIUM"
  },

  "PLC-PIPE-07": {
    id: "PLC-PIPE-07",
    name: "Pipeline Monitoring PLC",
    type: "PLC",
    domain: "OT",
    location: "Pipeline Control",
    criticality: "HIGH"
  },

  "FLOW-CONT-03": {
    id: "FLOW-CONT-03",
    name: "Flow Control Unit",
    type: "Industrial Controller",
    domain: "OT",
    location: "Refinery Processing Unit",
    criticality: "MEDIUM"
  },

  "FIREWALL-EDGE": {
    id: "FIREWALL-EDGE",
    name: "Edge Network Firewall",
    type: "Firewall",
    domain: "IT",
    location: "Network Operations",
    criticality: "CRITICAL"
  },

  "NET-MON-01": {
    id: "NET-MON-01",
    name: "Network Monitoring Server",
    type: "Monitoring Server",
    domain: "IT",
    location: "SOC",
    criticality: "HIGH"
  },

  "SCADA-GW-01": {
    id: "SCADA-GW-01",
    name: "SCADA Gateway",
    type: "Gateway",
    domain: "OT",
    location: "Control Network",
    criticality: "HIGH"
  },

  "PLC-PUMP-11": {
    id: "PLC-PUMP-11",
    name: "Pump Control PLC",
    type: "PLC",
    domain: "OT",
    location: "Pump Station",
    criticality: "HIGH"
  },

  "IDS-NET-01": {
    id: "IDS-NET-01",
    name: "Network Intrusion Detection System",
    type: "IDS",
    domain: "IT",
    location: "SOC",
    criticality: "CRITICAL"
  },

  "PLC-DIST-CTRL": {
    id: "PLC-DIST-CTRL",
    name: "Distillation Control PLC",
    type: "PLC",
    domain: "OT",
    location: "Distillation Unit",
    criticality: "CRITICAL"
  },

  "SCADA-CONFIG": {
    id: "SCADA-CONFIG",
    name: "SCADA Configuration Manager",
    type: "Server",
    domain: "IT",
    location: "Control Systems Network",
    criticality: "HIGH"
  },

  "TEMP-SENS-09": {
    id: "TEMP-SENS-09",
    name: "Temperature Sensor Node",
    type: "Sensor",
    domain: "OT",
    location: "Hydrotreating Unit",
    criticality: "MEDIUM"
  },

  "SCADA-DATA-01": {
    id: "SCADA-DATA-01",
    name: "SCADA Data Aggregation Server",
    type: "Server",
    domain: "IT",
    location: "Control Network",
    criticality: "HIGH"
  },

  "SCADA-GATEWAY": {
    id: "SCADA-GATEWAY",
    name: "SCADA Gateway Router",
    type: "Gateway",
    domain: "OT",
    location: "Industrial Network",
    criticality: "HIGH"
  },

  "IND-ROUTER-01": {
    id: "IND-ROUTER-01",
    name: "Industrial Network Router",
    type: "Router",
    domain: "IT",
    location: "Industrial Network",
    criticality: "MEDIUM"
  },

  "PLC-MAINT-01": {
    id: "PLC-MAINT-01",
    name: "Maintenance PLC Interface",
    type: "PLC",
    domain: "OT",
    location: "Maintenance Terminal",
    criticality: "HIGH"
  },

  "AUTH-GATEWAY": {
    id: "AUTH-GATEWAY",
    name: "Authentication Gateway",
    type: "Authentication Service",
    domain: "IT",
    location: "Network Operations",
    criticality: "CRITICAL"
  }

};