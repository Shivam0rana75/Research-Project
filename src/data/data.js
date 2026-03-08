export const incidents = {
  "INC-001": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-001",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "escalated",

    description:
      "Multiple unauthorized login attempts were detected targeting the SCADA control network. The intrusion detection system flagged abnormal authentication requests coming from an external IP address.",

    affectedAssets: {
      OTEquipment: [
        { name: "SCADA-HMI-01", type: "Human Machine Interface", level: "CRITICAL" },
        { name: "PLC-DIST-03", type: "Programmable Logic Controller", level: "WARNING" },
        { name: "RTU-TANK-12", type: "Remote Terminal Unit", level: "WARNING" },
        { name: "ENG-WS-045", type: "Engineering Workstation", level: "MONITORING" }
      ],

      ITServices: [
        { name: "AUTH-SRV-02", type: "Authentication Server", level: "WARNING" },
        { name: "SEC-MON-01", type: "Security Monitoring Platform", level: "MONITORING" }
      ]
    },

    timeline: [
      { time: "14:26", event: "Multiple failed login attempts detected", type: "alert" },
      { time: "14:27", event: "Intrusion detection alert triggered", type: "alert" },
      { time: "14:28", event: "Security operations team notified", type: "notification" },
      { time: "14:29", event: "Firewall rule automatically blocked IP", type: "defense" },
      { time: "14:31", event: "Incident escalated to SOC lead", type: "escalation" }
    ]
  },

  "INC-002": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-002",
    title: "Firewall Breach Attempt",
    location: "Network Operations",
    time: "2:15 PM",
    assets: 3,
    escalated: "sent",

    description:
      "Firewall logs indicate repeated port scanning attempts targeting refinery network services. Traffic originated from an unknown external host.",

    affectedAssets: {
      OTEquipment: [
        { name: "PLC-PIPE-07", type: "Pipeline Monitoring PLC", level: "WARNING" },
        { name: "FLOW-CONT-03", type: "Flow Control Unit", level: "MONITORING" }
      ],

      ITServices: [
        { name: "FIREWALL-EDGE", type: "Firewall Infrastructure", level: "CRITICAL" },
        { name: "NET-MON-01", type: "Network Monitoring Server", level: "WARNING" }
      ]
    },

    timeline: [
      { time: "14:10", event: "Port scanning detected", type: "alert" },
      { time: "14:12", event: "Firewall generated anomaly alert", type: "alert" },
      { time: "14:13", event: "Automatic firewall mitigation enabled", type: "defense" },
      { time: "14:14", event: "Security analyst assigned to investigation", type: "notification" }
    ]
  },

  "INC-003": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-003",
    title: "Suspicious SCADA Network Traffic",
    location: "Control Network",
    time: "1:50 PM",
    assets: 4,
    escalated: "not escalated",

    description:
      "Unusual traffic patterns detected between SCADA nodes indicating possible lateral movement inside the control network.",

    affectedAssets: {
      OTEquipment: [
        { name: "SCADA-GW-01", type: "SCADA Gateway", level: "WARNING" },
        { name: "PLC-PUMP-11", type: "Pump Control PLC", level: "WARNING" }
      ],

      ITServices: [
        { name: "IDS-NET-01", type: "Network Intrusion Detection System", level: "CRITICAL" }
      ]
    },

    timeline: [
      { time: "13:45", event: "Network anomaly detected", type: "alert" },
      { time: "13:46", event: "Internal traffic spike recorded", type: "alert" },
      { time: "13:47", event: "SCADA traffic monitoring rules activated", type: "defense" },
      { time: "13:48", event: "Security monitoring team notified", type: "notification" }
    ]
  },

  "INC-004": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-004",
    title: "Unauthorized Configuration Change",
    location: "Distillation Unit",
    time: "1:30 PM",
    assets: 2,
    escalated: "not escalated",

    description:
      "Configuration changes were detected in the distillation unit PLC without authorized operator credentials.",

    affectedAssets: {
      OTEquipment: [
        { name: "PLC-DIST-CTRL", type: "Distillation PLC Controller", level: "CRITICAL" }
      ],

      ITServices: [
        { name: "SCADA-CONFIG", type: "SCADA Configuration Manager", level: "WARNING" }
      ]
    },

    timeline: [
      { time: "13:25", event: "PLC configuration modified without authorization", type: "alert" },
      { time: "13:26", event: "System integrity alert triggered", type: "alert" },
      { time: "13:27", event: "Configuration rollback initiated", type: "defense" },
      { time: "13:29", event: "Security manager notified", type: "notification" }
    ]
  },

  "INC-005": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-005",
    title: "Sensor Communication Failure",
    location: "Hydrotreating Unit",
    time: "12:55 PM",
    assets: 2,
    escalated: "not escalated",

    description:
      "Communication between temperature sensors and the SCADA data aggregator was lost temporarily.",

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
      { time: "12:51", event: "Control system detected sensor communication failure", type: "alert" },
      { time: "12:52", event: "Alert generated by SCADA monitoring system", type: "notification" },
      { time: "12:54", event: "Backup sensor activated", type: "defense" }
    ]
  },

  "INC-006": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-006",
    title: "Network Latency Spike",
    location: "Industrial Network",
    time: "12:20 PM",
    assets: 3,
    escalated: "not escalated",

    description:
      "Unexpected latency spike detected across refinery control network potentially affecting monitoring systems.",

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
      { time: "12:19", event: "Monitoring alert triggered", type: "notification" },
      { time: "12:20", event: "Traffic rerouted through secondary gateway", type: "defense" }
    ]
  },

  "INC-007": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-007",
    title: "Unauthorized Remote Login",
    location: "Maintenance Terminal",
    time: "11:45 AM",
    assets: 2,
    escalated: "not escalated",

    description:
      "Remote login attempt detected from an unrecognized device attempting to access maintenance terminal systems.",

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
      { time: "11:43", event: "Authentication attempt blocked", type: "defense" },
      { time: "11:44", event: "Security team notified of suspicious login", type: "notification" }
    ]
  },

  "INC-008": {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-008",
    title: "Suspicious Data Transfer",
    location: "Data Center",
    time: "11:10 AM",
    assets: 3,
    escalated: "not escalated",

    description:
      "Large data transfer detected from refinery servers to an unknown external destination.",

    affectedAssets: {
      OTEquipment: [
        { name: "PLC-PROC-01", type: "Process Monitoring PLC", level: "WARNING" }
      ],

      ITServices: [
        { name: "BACKUP-SRV-01", type: "Data Backup Server", level: "WARNING" },
        { name: "FIREWALL-CORE", type: "Firewall Infrastructure", level: "CRITICAL" }
      ]
    },

    timeline: [
      { time: "11:05", event: "Outbound data spike detected", type: "alert" },
      { time: "11:06", event: "Network monitoring system flagged anomaly", type: "alert" },
      { time: "11:07", event: "Firewall flagged unusual traffic", type: "defense" },
      { time: "11:09", event: "Incident escalated to data security team", type: "escalation" }
    ]
  }
};



