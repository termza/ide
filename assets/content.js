/* PPL study content — compiled from FAR/AIM, PHAK (FAA-H-8083-25), ACS (FAA-S-ACS-6),
   and the Cessna 172S POH/AFM. Cite the primary source on every topic.
   This is study reference material — verify against current publications before flight. */

window.CONTENT = {
  meta: {
    aircraft: "Cessna 172S Skyhawk",
    updated: "2026-05-08",
    sources: [
      { id: "far",  label: "14 CFR (FARs)" },
      { id: "aim",  label: "AIM" },
      { id: "phak", label: "PHAK (FAA-H-8083-25)" },
      { id: "acs",  label: "Private Pilot ACS (FAA-S-ACS-6)" },
      { id: "poh",  label: "Cessna 172S POH/AFM" }
    ]
  },

  sections: [

    /* ============================================================
       SECTION 1 — CESSNA 172S (POH)
       ============================================================ */
    {
      id: "c172s",
      title: "Cessna 172S",
      blurb: "V-speeds, limitations, and procedures from the Skyhawk POH.",
      icon: "plane",
      topics: [

        {
          id: "vspeeds",
          title: "V-Speeds (KIAS)",
          source: "C172S POH §2 — Limitations / §4 — Normal Procedures",
          tags: ["poh", "speeds", "memory"],
          summary: "All key Cessna 172S airspeeds in one place. Memorize cold.",
          body: `
The 172S airspeed indicator and POH use **knots indicated**. These are the speeds you'll
be tested on for any 172S checkride.

<qref>
VSO|40|kts
VS|48|kts
VR|55|kts
VX|62|kts
VY|74|kts
VFE (10°)|110|kts
VFE (10–30°)|85|kts
VA (2550 lb)|105|kts
VA (2200 lb)|98|kts
VA (1900 lb)|90|kts
VNO|129|kts
VNE|163|kts
VG (best glide)|68|kts
Approach (no flaps)|65–75|kts
Approach (full flaps)|60–70|kts
Short field TO|56|kts
Short field LDG|61|kts
</qref>

### How they're defined
- **VSO** — Stall, landing configuration (full flaps).
- **VS** — Stall, clean.
- **VR** — Rotation speed (normal takeoff).
- **VX** — Best angle of climb (most altitude per unit of distance).
- **VY** — Best rate of climb (most altitude per unit of time).
- **VFE** — Maximum flap extension. The 172S has two ranges: 110 KIAS for 0–10°, 85 KIAS for 10–30°.
- **VA** — Maneuvering. Below VA, full and abrupt control deflection won't break the airframe (single axis). VA *decreases with weight*.
- **VNO** — Max structural cruise. Smooth air only above this speed.
- **VNE** — Never exceed. Red line.
- **VG** — Best glide (engine-out, max distance).

> Mnemonic for VA scaling: **VA² ∝ Weight.** Lighter airplane → lower VA.

### Color arcs on the ASI
| Arc | Range | Meaning |
|---|---|---|
| White | 40–85 | Flap operating range (VS0 → VFE 10–30°) |
| Green | 48–129 | Normal operating range (VS → VNO) |
| Yellow | 129–163 | Caution — smooth air only |
| Red line | 163 | VNE |
`
        },

        {
          id: "limitations",
          title: "Aircraft Limitations",
          source: "C172S POH §2",
          tags: ["poh", "limitations", "memory"],
          summary: "Weights, CG, engine, and operational limits for the Skyhawk.",
          body: `
### Weights
<qref>
Max ramp|2558|lb
Max takeoff|2550|lb
Max landing|2550|lb
Std empty (typical)|≈1680|lb
Useful load|≈870|lb
Max baggage area 1|120|lb
Max baggage area 2|50|lb
Max combined baggage|120|lb
</qref>

### Powerplant
- Engine: **Lycoming IO-360-L2A**, 180 BHP @ 2700 RPM.
- Propeller: **McCauley fixed-pitch**, 76 in.
- Oil capacity: **8 qt** (sump); **min 5 qt** for flight; **6 qt** for extended flight.
- Max RPM: **2700**.
- Max oil temp: **245 °F**.
- Oil pressure: **20 psi min / 115 psi max** (green 50–90 psi).

### Fuel
- **100LL** (alternate: 100). Total capacity **56 gal** (53 usable). Standard.
- Long-range tanks (if equipped): **92 gal** total / 87 usable.
- Min fuel for each tank for takeoff: **fuel selector BOTH** above 1/4 tank in slips/skids.

### Operating limits
- Max demonstrated crosswind: **15 kt** (not a limit, but a demo).
- Flight load factors (flaps up): **+3.8 g / −1.52 g**.
- Flight load factors (flaps down): **+3.0 g**.
- Max bank w/ autopilot: per STC; manually no bank limit but 60°+ → aerobatic regime not approved.
- **Acrobatic maneuvers: prohibited** (Normal category).
- **Spins: prohibited** in Utility/Normal as configured (intentional spins not approved on most S models — verify your specific aircraft's POH).

> "**A 172 is not a spin trainer.**" Recovery technique works, but intentional spins are prohibited per the POH on most S-model deliveries.

### CG
Refer to the loading graph and CG envelope in POH §6. Forward CG = more stable, higher stall speed, more elevator authority needed. Aft CG = less stable, lower stall, easier to over-rotate.
`
        },

        {
          id: "normal-ops",
          title: "Normal Procedures (Flow)",
          source: "C172S POH §4",
          tags: ["poh", "checklist", "procedures"],
          summary: "Memory flow for run-up, takeoff, and landing.",
          body: `
> Always back up flow with the checklist. Flow then verify.

### Before takeoff (run-up at 1700 RPM)
1. Parking brake — **SET**
2. Flight controls — **FREE & CORRECT**
3. Flight instruments — **CHECK** (heading, attitude, altimeter to field elevation ±75 ft)
4. Fuel quantity — **CHECK**, selector **BOTH**
5. Mixture — **RICH** (below 3000 ft DA)
6. Throttle — **1700 RPM**
   - Magnetos — **L → BOTH**, **R → BOTH** (max drop 175 RPM, max diff 50 RPM)
   - Engine instruments — **green**
   - Vacuum — **green**
   - Ammeter — **green**
   - Carb heat — N/A (fuel injected)
7. Throttle — **idle check**
8. Flaps — **AS REQ**
9. Trim — **TAKEOFF**
10. Doors & windows — **CLOSED & LATCHED**
11. Lights, transponder, autopilot — **AS REQ**
12. Brief — takeoff, abort, emergency return.

### Normal takeoff
- Flaps **0–10°**. Full throttle. Rotate **55 KIAS**. Climb **VY 74 KIAS**.

### Short-field takeoff
- Flaps **10°**, brakes held, full power, mixture rich. Release brakes.
- Rotate at **51 KIAS**. Climb at **56 KIAS** until obstacle clear, then **VY**.

### Soft-field takeoff
- Flaps **10°**, yoke aft. Add power smoothly while moving. Liftoff in ground effect.
- Accelerate in ground effect to **VY**, then climb out.

### Cruise
- 2200–2700 RPM. Lean per POH above 3000 ft DA. Monitor engine instruments.

### Normal landing
- Pattern speed **80–90 KIAS**. Approach **65–75 KIAS** with flaps as appropriate.
- Full flaps short final, **60–70 KIAS**, touchdown main wheels first.

### Short-field landing
- Full flaps. **61 KIAS** on short final. Touchdown without float, max braking, flaps up after touchdown.

### Soft-field landing
- Full flaps. Normal approach speed. Touchdown softly, hold yoke aft, keep nosewheel light.
`
        },

        {
          id: "emergencies",
          title: "Emergency Procedures",
          source: "C172S POH §3",
          tags: ["poh", "emergency", "memory"],
          summary: "Memory items for the most common Skyhawk emergencies.",
          body: `
> POH §3 memory items in **bold** must be done from memory. Then run the checklist.

### Engine failure in flight
1. Airspeed — **68 KIAS (best glide)**
2. Best landing field — **SELECT** (within glide)
3. Mixture — **IDLE CUTOFF**
4. Fuel selector — **OFF**
5. Ignition switch — **OFF**
6. Wing flaps — **AS REQUIRED**
7. Master switch — **OFF** (final, after committed)
8. Doors — **UNLATCH**
9. Touchdown — **MAINS FIRST**, slightly tail-low

### Engine failure on takeoff (immediately after)
- **Pitch for 68 KIAS.**
- **Land more or less straight ahead.** Small turns only to avoid obstacles.
- Mixture, fuel, ignition, master — OFF as time permits.

### Engine fire in flight
1. Mixture — **IDLE CUTOFF**
2. Fuel selector — **OFF**
3. Master switch — **OFF**
4. Cabin heat & air — **OFF** (except wing-root vents)
5. Airspeed — **100 KIAS** (slip if needed to extinguish)
6. Forced landing — **EXECUTE**

### Engine fire on start
- Crank with **mixture idle cutoff** to draw fire into the engine. If it fails to start and continues to burn, evacuate.

### Electrical fire / smoke
1. Master — **OFF**
2. Vents/cabin air — **CLOSED**
3. Fire extinguisher — **ACTIVATE**
4. After: vent the cabin, then re-establish essential equipment one item at a time if needed.

### Loss of oil pressure
- Reduce power. Land at nearest suitable airport. Expect imminent engine failure.

### Static / pitot blockage
- Use **alternate static** (if equipped — break VSI glass otherwise; expect 50 ft altimeter, slight ASI bias).
- Pitot blockage: ASI behaves like an altimeter (climbs with altitude). Cross-check pitch + power.

### Lost communications
- Squawk **7600**.
- Light gun signals (towered): see Comms section.
- VFR: continue to land at nearest suitable airport, monitor 121.5.
`
        },

        {
          id: "wb",
          title: "Weight & Balance",
          source: "C172S POH §6 / PHAK Ch. 10",
          tags: ["poh", "wb", "performance"],
          summary: "How CG affects flight, plus the math you'll be quizzed on.",
          body: `
### The math
- **Moment = Weight × Arm**
- **CG = Total Moment / Total Weight**
- A station forward of the datum is negative arm (Cessna uses positive arms aft of the firewall).

### Effects of CG location
| Forward CG | Aft CG |
|---|---|
| Higher stall speed | Lower stall speed |
| Higher cruise drag (more elevator down-load) | Lower cruise drag, faster cruise |
| Better stability, harder to flare | Less stable, easier to over-rotate |
| Easier stall recovery | Stall/spin recovery harder |

### Standard weights to memorize
- Avgas (100LL): **6 lb/gal**
- Oil: **7.5 lb/gal** (1 qt ≈ 1.875 lb)
- Average adult: **190 lb (summer) / 195 lb (winter)** per FAA standard

### Common 172S problems
1. Two front-seat 200-lb pilots + 50-lb baggage in area 1 + full fuel = often **at or near max gross**. Always run the numbers.
2. Aft CG with 4 adults + baggage area 2 is common. Watch the envelope.
3. When **fuel burns**, CG **moves slightly aft** in a 172 — note where the wings are relative to datum.
`
        },

        {
          id: "systems-c172",
          title: "172S Systems Quick Tour",
          source: "C172S POH §7",
          tags: ["poh", "systems"],
          summary: "Powerplant, fuel, electrical, vacuum/pitot — the bare-essentials version.",
          body: `
### Powerplant — IO-360-L2A
- **F**uel **I**njected, horizontally opposed, 4-cyl, normally aspirated, 360 ci, 180 HP.
- No carburetor → **no carb heat** (alternate air door, manual or automatic).
- Air filter blockage → alternate air opens (springs open on most STCs).

### Fuel system
- Two wing tanks (high-wing, **gravity-fed**) → fuel selector (LEFT/RIGHT/BOTH/OFF) → fuel shutoff valve → engine-driven pump → fuel injection servo.
- **Auxiliary electric fuel pump** is for vapor purging on hot starts (some 172S aren't equipped — verify).
- Fuel selector **BOTH** for takeoff and landing.

### Electrical
- **28 V** system, **alternator** (not generator), **24 V battery**.
- Master switch is split: **BAT** and **ALT**. ALT can be turned off independently to isolate alternator.
- Ammeter shows charge (+) or discharge (−). Low-voltage light → check alternator.
- Avionics master separates radios from main bus during start/shutdown.

### Pitot-static
- Pitot tube: **dynamic + static** for ASI.
- Static port: side of fuselage; feeds **ASI**, **VSI**, **altimeter**.
- **Pitot heat** switch warms the pitot tube; check during run-up at night/IMC.

### Vacuum (steam-gauge variants)
- Engine-driven vacuum pump powers **AI** and **HI** (gyros).
- Vacuum failure: AI/HI unreliable. Glass cockpit (G1000) variants have AHRS instead — different failure modes.

### Avionics (G1000, if equipped)
- Two displays (PFD + MFD), integrated GPS, dual COM/NAV, Mode S transponder, GFC700 autopilot common.
- Reversionary mode: one display fails, the other shows both PFD and MFD.
`
        }
      ]
    },

    /* ============================================================
       SECTION 2 — REGULATIONS
       ============================================================ */
    {
      id: "regs",
      title: "Regulations",
      blurb: "FAR Parts 61, 91, NTSB 830 — the ones you'll be asked about.",
      icon: "book",
      topics: [

        {
          id: "part61-cert",
          title: "Part 61 — Certificates & Currency",
          source: "14 CFR §61",
          tags: ["far", "certificate"],
          summary: "Eligibility, ratings, and ongoing currency requirements.",
          body: `
### Private pilot — eligibility (§61.103)
- **17** years old (16 for solo glider/balloon).
- Read, speak, write, and understand English.
- Hold a **student** (or higher) certificate.
- Pass the **knowledge test** (within 24 calendar months of the practical).
- Pass the **practical** (checkride).
- Hold at least a **3rd-class medical** (or BasicMed if applicable; sport pilot uses driver license).

### Aeronautical experience (§61.109(a)) — airplane single-engine land
Minimums:
- **40 hours** total flight time.
- **20 hours** dual instruction including:
  - **3 hr** cross-country dual
  - **3 hr** night dual including a **>100 NM** XC and **10 T/O & landings** to a full stop
  - **3 hr** instrument
  - **3 hr** within 2 calendar months of the practical (test prep)
- **10 hours** solo including:
  - **5 hr** solo XC
  - One solo XC of **≥150 NM** with three full-stop landings, with one leg **>50 NM** straight-line
  - **3 takeoffs/landings** to a full stop at a controlled airport

### Currency to act as PIC (§61.56, §61.57)
- **Flight review:** every **24 calendar months**, 1 hr ground + 1 hr flight (or qualifying alternate).
- **3 takeoffs and landings in last 90 days** in **same category, class, and type if required** to carry passengers.
- **Tailwheel:** T/Os and landings must be **to a full stop** in a tailwheel airplane.
- **Night** (§61.57(b)): 3 T/O and full-stop landings between **1 hr after sunset and 1 hr before sunrise** in last 90 days to carry pax at night.
- **Medical:** Required class must be current (3rd class lasts 60 cal months if under 40, 24 cal months if 40 or older).

### Logging requirements (§61.51)
- Log time required for currency, certificates, and ratings.
- PIC time: when **sole manipulator** of the controls of an aircraft for which you are rated.
- XC for ratings: **landing ≥50 NM** straight-line from origin (private cert.).
`
        },

        {
          id: "part91-rules",
          title: "Part 91 — Operating Rules (Highlights)",
          source: "14 CFR §91",
          tags: ["far", "ops"],
          summary: "Most-tested operating rules.",
          body: `
### Pre-flight (§91.103)
PIC must be familiar with **all available information** including:
- Runway lengths, takeoff and landing distance data
- Weather reports/forecasts, fuel requirements, alternates
- Known traffic delays (ATC) for IFR or any flight not in the vicinity of the airport
- For VFR over **1 NM** from departure: weather, fuel, runway data still required as available

> Mnemonic: **NWKRAFT** — NOTAMs, Weather, Known ATC delays, Runway lengths, Alternates, Fuel, Takeoff/landing distances.

### Fuel reserves (§91.151) — VFR
- **Day:** plan to land with at least **30 minutes** at normal cruise.
- **Night:** at least **45 minutes**.

### Right-of-way (§91.113)
- In distress > balloon > glider/airship > aircraft towing/refueling > airplane/rotorcraft.
- **Converging same category:** aircraft to the **right** has the right-of-way.
- **Head-on:** both turn **right**.
- **Overtaking:** the aircraft being overtaken has the right-of-way; pass on the **right**.
- **Landing:** lower aircraft has right-of-way (don't use it to cut in front).

### Minimum safe altitudes (§91.119)
- **Anywhere:** if the engine fails, must be able to land without undue hazard.
- **Congested area:** **1000 ft** above the highest obstacle within a 2000-ft horizontal radius.
- **Other than congested:** **500 ft** AGL.
- **Sparsely populated/water:** no closer than **500 ft** to any person, vessel, or structure.

### Speed limits (§91.117)
- **Below 10,000 MSL:** ≤ **250 KIAS**.
- **Below 2,500 AGL within 4 NM of a Class C/D primary airport:** ≤ **200 KIAS**.
- **Class B underlying / VFR corridor:** ≤ **200 KIAS**.

### Oxygen (§91.211) — non-pressurized
- **>12,500 to 14,000 MSL:** required for **flight crew** if duration **>30 min**.
- **>14,000 MSL:** required for flight crew at all times.
- **>15,000 MSL:** offered to all occupants.

### Required equipment for VFR day (§91.205) — **A TOMATO FLAMES**
- **A**irspeed indicator
- **T**achometer
- **O**il pressure gauge
- **M**anifold pressure (constant-speed prop only — N/A for 172S)
- **A**ltimeter
- **T**emperature gauge (each liquid-cooled engine — N/A for 172S)
- **O**il temperature gauge
- **F**uel quantity (each tank)
- **L**anding gear position lights (retractable — N/A for 172S)
- **A**nti-collision lights (aircraft certificated after 1996)
- **M**agnetic compass
- **E**LT
- **S**eatbelts (and shoulder harnesses for front seats post-1978)

### VFR night adds (§91.205) — **FLAPS**
- **F**uses (one spare set or three of each kind required)
- **L**anding light (only if for hire)
- **A**nti-collision lights
- **P**osition lights
- **S**ource of electrical power

### ELT (§91.207)
- Required on most US-registered aircraft.
- Battery: replace at **50% of useful life** or after **1 cumulative hour** of use.
- Inspect every **12 calendar months**.

### Inspections — **AV1ATE**
- **A**nnual — every 12 calendar months
- **V**OR — every 30 days for IFR
- **1**00-hour — for hire/instruction (overflight up to 10 hr to reach inspection allowed)
- **A**ltimeter/pitot-static — 24 calendar months (IFR)
- **T**ransponder — 24 calendar months
- **E**LT — 12 calendar months

### ADS-B (§91.225, §91.227)
- **Required** to operate in: Class A, B, C, above the ceiling and within the lateral boundaries of B/C up to 10,000 MSL, in Class E above 10,000 MSL (excluding below 2,500 AGL), and within a Mode-C veil.
`
        },

        {
          id: "ntsb830",
          title: "NTSB Part 830 — Reporting",
          source: "49 CFR §830",
          tags: ["far", "reporting"],
          summary: "Accident vs. incident — what to report and when.",
          body: `
### Definitions
- **Accident:** an occurrence in which any person suffers death or serious injury, or the aircraft receives substantial damage. Death within 30 days counts.
- **Incident (reportable):** see list below — does not rise to "accident" but must still be reported.

### Immediate notification required for:
- Flight control system malfunction.
- Inability of any required flight crew to perform normal duties (illness/incapacitation).
- In-flight fire.
- Aircraft collide in flight.
- Damage to property other than aircraft >**$25,000**.
- Overdue aircraft / believed in accident.
- Release of all or major portion of a propeller blade or rotor blade.
- Complete loss of information from more than 50% of an aircraft's EFIS displays.

### Where to file
- Notify the nearest **NTSB** field office *immediately*.
- File a **written report** within **10 days** for accidents (or overdue aircraft); on request for incidents.
`
        }
      ]
    },

    /* ============================================================
       SECTION 3 — AERODYNAMICS & PERFORMANCE
       ============================================================ */
    {
      id: "aero",
      title: "Aerodynamics & Performance",
      blurb: "Forces, stalls, performance, density altitude.",
      icon: "wind",
      topics: [

        {
          id: "four-forces",
          title: "Four Forces & Aircraft Stability",
          source: "PHAK Ch. 5",
          tags: ["phak", "aero"],
          summary: "Lift, drag, thrust, weight — and how they interact.",
          body: `
### The four forces
- **Lift** — perpendicular to the relative wind, generated by pressure differential and downwash (Newton + Bernoulli).
- **Weight** — gravity, downward through the CG.
- **Thrust** — produced by the propeller, parallel to the longitudinal axis (mostly).
- **Drag** — parallel and opposite to motion through the air.

In **unaccelerated, level flight**, lift = weight and thrust = drag. They are *not* always equal — only in equilibrium.

### Drag
- **Parasite drag** (form, skin friction, interference) — increases with **V²**.
- **Induced drag** (drag from producing lift, tied to wingtip vortices) — decreases with V². Highest at low speed/high AoA.
- **Total drag** is U-shaped; minimum at **L/D-max** speed (best glide / best endurance for jets / max range conditions).

### Stability axes
| Axis | Movement | Surface | Stability type |
|---|---|---|---|
| Longitudinal | Roll | Ailerons | Lateral (dihedral) |
| Lateral | Pitch | Elevator | Longitudinal (CG vs. tail) |
| Vertical | Yaw | Rudder | Directional (vertical fin) |

### Left-turning tendencies (full power, low airspeed, high AoA — i.e., takeoff)
1. **Torque** — Newton's 3rd; engine spins clockwise (from cockpit), airframe wants to roll left.
2. **P-factor** — descending blade (right side) takes a bigger bite at high AoA → yaw left.
3. **Spiraling slipstream** — corkscrews around fuselage, hits left side of vertical stab → yaw left.
4. **Gyroscopic precession** — only at pitch change in tailwheel rotation; for tricycle, mostly negligible.

### Load factor in turns
- **Lf = 1 / cos(bank)**
- 30° → 1.15 g · 45° → 1.41 g · 60° → 2.0 g · 75° → 3.86 g
- **Stall speed increases with √(load factor):** Vs(new) = Vs × √Lf.
`
        },

        {
          id: "stalls-spins",
          title: "Stalls & Spins",
          source: "PHAK Ch. 5; AC 61-67C",
          tags: ["phak", "aero", "safety"],
          summary: "AoA is what stalls a wing — speed is just a proxy.",
          body: `
### A stall is an angle-of-attack event
- An airfoil stalls at its **critical angle of attack** (~16–18° for the 172).
- Stalls can occur at **any airspeed**, **any attitude**, **any power setting**.
- Recovery: **reduce AoA** (push), wings level, full power, recover with minimum altitude loss.

### Factors that change indicated stall speed
| Factor | Effect on Vs |
|---|---|
| Increased load factor (turns, pull-ups) | Higher |
| Forward CG | Higher |
| Higher gross weight | Higher |
| Flaps extended | Lower |
| Frost/ice/contamination | Higher |
| Power on (prop wash over wing) | Lower |

### Spins
- A spin requires **stall + yaw**. If either is broken, the spin doesn't develop (or breaks).
- **PARE** for spin recovery (most light singles):
  - **P**ower idle
  - **A**ilerons neutral
  - **R**udder full opposite to rotation
  - **E**levator briskly forward to break the stall
- Cessna 172 (S model): **intentional spins are prohibited**. Use only as a recovery technique if inadvertently entered.

### Angle of attack vs. pitch
AoA = angle between **chord line** and **relative wind**. Pitch = angle between chord line and **horizon**. They are not the same — you can be in level flight, descending, or climbing at any AoA.
`
        },

        {
          id: "density-alt",
          title: "Density Altitude & Performance",
          source: "PHAK Ch. 11; C172S POH §5",
          tags: ["phak", "poh", "performance"],
          summary: "Hot, high, and humid kill performance.",
          body: `
### Definitions
- **Pressure altitude:** altitude in standard atmosphere where pressure equals ambient. (Set 29.92 → read the altimeter.)
- **Density altitude:** pressure altitude **corrected for non-standard temperature**. The altitude at which the air density matches what's outside.

### Quick rule of thumb
> **DA ≈ PA + 120 ft × (OAT − ISA temp at that PA)**.
> ISA at sea level = 15 °C; lapse rate ≈ 2 °C / 1000 ft.

### Performance effects of high DA
- **Lower air density** → less mass through the engine → less power.
- **Lower thrust** from the prop (fewer molecules to push).
- **Lower lift** at any given TAS → higher TAS required for same IAS.
- **Longer takeoff/landing rolls**, **lower climb gradient**, **higher TAS** for same IAS.

### TAS vs. IAS
- TAS increases with altitude / temperature for a given IAS.
- Rule of thumb: **TAS ≈ IAS + 2% per 1000 ft**.

### Humidity
- Adds water vapor displacing dry air → less dense → reduces engine and aerodynamic performance. Often ignored on charts, but real.

### Charts to know in the 172S POH §5
- Takeoff distance (short field) — use as a *minimum* baseline.
- Landing distance (short field).
- Climb performance (rate of climb at different DA/weight).
- Cruise performance (RPM/altitude/power %).

> The POH numbers are achieved by a **professional test pilot**, **brand-new airplane**, **light weight**, **paved level dry runway**. Add margins.
`
        }
      ]
    },

    /* ============================================================
       SECTION 4 — WEATHER
       ============================================================ */
    {
      id: "wx",
      title: "Weather",
      blurb: "Reports, hazards, and decoding the products you'll actually use.",
      icon: "cloud",
      topics: [

        {
          id: "metar-taf",
          title: "Decoding METAR & TAF",
          source: "AIM Ch. 7; AC 00-45",
          tags: ["aim", "weather"],
          summary: "Read a station observation and a forecast like a pro.",
          body: `
### METAR — surface observation
\`KSAF 081853Z 27015G22KT 10SM FEW080 24/M02 A3012 RMK AO2 SLP123\`
- **KSAF** — Santa Fe.
- **081853Z** — 8th day of month, 1853 Zulu.
- **27015G22KT** — wind 270° at 15 kt, gusts 22.
- **10SM** — visibility 10 statute miles.
- **FEW080** — few clouds at 8,000 ft AGL.
- **24/M02** — 24 °C / dewpoint −2 °C.
- **A3012** — altimeter 30.12 inHg.
- **RMK AO2** — automated station with precipitation discriminator. **SLP123** — sea-level pressure 1012.3 mb.

### Cloud coverage
| Code | Eighths | Meaning |
|---|---|---|
| SKC/CLR | 0 | Clear |
| FEW | 1–2 | Few |
| SCT | 3–4 | Scattered |
| BKN | 5–7 | Broken (ceiling!) |
| OVC | 8 | Overcast (ceiling!) |
| VV | n/a | Vertical visibility (sky obscured) |

> **Ceiling** = lowest layer reported as **broken, overcast, or vertical visibility**.

### TAF — terminal area forecast (5 SM around airport, 24–30 hr window)
- **FM** — From a specified time, conditions change rapidly.
- **TEMPO** — Temporary fluctuations expected to last <1 hr at a time, less than half the period.
- **PROB30/PROB40** — 30%/40% probability.
- **BECMG** — Becoming, conditions gradually change over the period.

### Common weather acronyms
- **VC** vicinity · **−/+** light/heavy · **TS** thunderstorm · **RA** rain · **SN** snow · **FG** fog · **BR** mist · **DZ** drizzle · **GR** hail · **GS** small hail/snow pellets · **FZ** freezing.
`
        },

        {
          id: "wx-hazards",
          title: "Weather Hazards",
          source: "PHAK Ch. 12; AIM Ch. 7",
          tags: ["phak", "weather", "safety"],
          summary: "Thunderstorms, icing, turbulence, fog, wind shear.",
          body: `
### Thunderstorms
- Three stages: **cumulus** (updrafts) → **mature** (up + downdrafts, lightning, heavy rain, hail) → **dissipating**.
- Required ingredients: **moisture, instability, lifting force**.
- Hazards: **severe turbulence, hail, lightning, microbursts, icing, tornadoes**.
- **Avoid by ≥20 NM** (severe TS). Never fly under or attempt to top a thunderstorm in a light single.

### Icing
- Forms when **OAT ≤ 0 °C** with **visible moisture**.
- **Structural icing types:**
  - **Rime** — milky, opaque, low water content, forms in stratus/freezing drizzle. Easier to shed.
  - **Clear (glaze)** — smooth, dense, comes from large supercooled drops (e.g., freezing rain). Worst.
  - **Mixed** — combination.
- **Effects:** weight gain, drag increase, lift decrease, **stall speed up**, controls hindered.
- **172S has no anti/de-ice.** Visible moisture + freezing temps → exit immediately.

### Turbulence categories (PIREP)
- **Light** — slight erratic changes; occupants strain against seat belts.
- **Moderate** — items dislodged; food service disrupted.
- **Severe** — large abrupt changes; momentary loss of control; harness restrains.
- **Extreme** — aircraft tossed violently, structural damage possible.

### Wind shear
- Sudden change in **wind speed/direction** over a short distance.
- Types: **microburst** (descending column from a TS), **frontal**, **inversion**, **terrain-induced**.
- Microburst signs: **virga** below clouds, **dust ring** at surface, sudden gain of headwind followed by tailwind.
- Avoid taking off or landing through a microburst — go around early, decisive power.

### Fog
- **Radiation** — clear nights, light wind, moist surface (dew point converges).
- **Advection** — moist air over colder surface (coastal).
- **Upslope** — moist air pushed up sloping terrain (cools to dewpoint).
- **Steam fog** — cold air over warm water.
- **Precipitation-induced** — warm rain into cool air.

### Mountain wave / wind
- Strong perpendicular winds + stable air → standing waves downwind, severe turbulence in **rotor**, downdrafts on **lee side**. Cap clouds, lenticulars, rotor clouds = visual cues.
`
        },

        {
          id: "wx-products",
          title: "Weather Products & Sources",
          source: "AIM Ch. 7; FAA Aviation Weather Handbook (FAA-H-8083-28)",
          tags: ["aim", "weather"],
          summary: "Briefings, weather services, and what each product is for.",
          body: `
### Where to get a briefing
- **1800wxbrief.com** / **1-800-WX-BRIEF** (Leidos Flight Service).
- **EFB apps** (ForeFlight, Garmin Pilot) for self-briefing.
- **aviationweather.gov** (NWS Aviation Weather Center).

### Briefing types (§91.103 / AIM 7-1-4)
- **Standard** — full briefing for a planned flight.
- **Abbreviated** — supplement to mass dissemination, update specific items.
- **Outlook** — for departures **6+ hours away**.

### Key products
| Product | What it is | Period |
|---|---|---|
| METAR | Surface observation | Issued hourly + special |
| TAF | Terminal forecast | 24–30 hr, 5 SM around airport |
| AIRMET | Significant wx for **light aircraft** (Sierra=IFR/mtn obscur, Tango=turb, Zulu=icing) | 6 hr |
| SIGMET | Severe wx (severe turb/icing, dust/sand, volcanic ash) — all aircraft | 4 hr |
| Convective SIGMET | Embedded TS, lines of TS, severe TS | 2 hr |
| PIREP | Pilot report | As reported |
| Winds & Temps Aloft (FB) | Forecast winds aloft | 6/12/24 hr |
| Surface Analysis | Fronts, isobars | Every 3 hr |
| Prog Charts | Forecast surface/upper-air | 12/24/36/48 hr |
| Radar Summary | Radar mosaic | Every 30 min |
| GFA | Graphical Forecasts for Aviation (replaces text area forecast) | 0–15 hr |

### Winds aloft decoding
- **9900** = light and variable.
- **Direction is true**, encoded as 2 digits (e.g., **27** = 270°). If ≥ 100, **add 50** to the direction and **subtract 100 kt** from speed (e.g., 7350 → 230° at 50 kt).
- Below 5000 ft AGL — **no winds aloft** in FB. Below 24,000 ft, **temperatures only above 5,000 ft AGL**.
- Temperatures above 24,000 ft are always **negative** — sign omitted.
`
        }
      ]
    },

    /* ============================================================
       SECTION 5 — AIRSPACE
       ============================================================ */
    {
      id: "airspace",
      title: "Airspace",
      blurb: "Class A–G, special use, and VFR weather minimums.",
      icon: "compass",
      topics: [

        {
          id: "airspace-classes",
          title: "Class A–G Reference",
          source: "AIM Ch. 3; 14 CFR §91.131–§91.135",
          tags: ["aim", "far", "airspace"],
          summary: "Boundaries, equipment, communications, and pilot requirements.",
          body: `
### Class A
- **18,000 MSL up to FL600**. IFR only. Clearance required. ATC separation provided.
- 172 students need not worry — service ceiling stops well below.

### Class B (busiest airports)
- Surface to **10,000 MSL** (typical). Inverted wedding-cake shape.
- **Clearance required:** "Cleared into the Class Bravo." Without those words you're not cleared.
- **Private pilot or higher** to operate (student pilots may with logbook endorsement, except 12 listed Class B's where solo students are prohibited per §91.131).
- **Mode C transponder + ADS-B Out** required, plus **two-way radio**, **VOR/TACAN** for IFR.
- VFR cloud clearance: **3 SM, clear of clouds**.

### Class C
- Surface area to **4,000 AGL** (typically 5 NM radius); shelf to **10 NM, 1,200–4,000 AGL**.
- **Two-way radio communications established** before entry (callsign acknowledged = clearance).
- **Mode C + ADS-B Out** required, plus within the **mode-C veil** for Class B.

### Class D
- Surface to **2,500 AGL** (typically). Tower-controlled airport.
- Two-way radio communications established before entry.
- No transponder requirement just because it's Class D.

### Class E
- All other controlled airspace. Floor varies: **surface, 700 AGL, 1,200 AGL, 14,500 MSL**.
- No comm requirement for VFR. Above **10,000 MSL** transponder + ADS-B required.

### Class G
- Uncontrolled. No ATC services; pilots responsible for see-and-avoid and weather minimums.

### VFR weather minimums (§91.155) — **3-152**
| Airspace | Visibility | Cloud clearance |
|---|---|---|
| Class A | n/a | n/a (IFR only) |
| Class B | 3 SM | Clear of clouds |
| Class C/D/E (<10k MSL) | 3 SM | 500 below, 1000 above, 2000 horizontal |
| Class E ≥10,000 MSL | 5 SM | 1000 below, 1000 above, 1 SM horizontal |
| Class G day <1,200 AGL | 1 SM | Clear of clouds |
| Class G day >1,200 AGL <10k MSL | 1 SM | 500/1000/2000 |
| Class G night <1,200 AGL | 3 SM | 500/1000/2000 |
| Class G ≥10,000 MSL | 5 SM | 1000/1000/1 SM |

### Special VFR (§91.157)
- Available **inside Class B/C/D/E surface area** when requested and approved.
- Day VFR: **1 SM visibility, clear of clouds**.
- Night SVFR: also requires **instrument-rated pilot in IFR-equipped airplane**.

### Special use airspace
- **Prohibited Areas** — no flight (P-40, etc.).
- **Restricted Areas** — entry requires permission from the controlling agency when active.
- **Warning Areas** — international waters, hazardous activity.
- **MOAs** — military operations, VFR may transit but caution.
- **Alert Areas** — high-volume of training, no restrictions.
- **CFAs** — Controlled Firing Areas, ceased when aircraft detected.

### TFRs
- Notified by NOTAM. Always check before flight (Sporting events under §91.145 — 3 NM, 3,000 AGL when ≥30,000 attendees).
`
        },

        {
          id: "vfr-altitudes",
          title: "VFR Cruising Altitudes",
          source: "14 CFR §91.159",
          tags: ["far", "airspace"],
          summary: "Hemispheric rule above 3,000 AGL.",
          body: `
Above **3,000 AGL** to but not including **18,000 MSL**:
- **Magnetic course 0–179°** → odd thousand + 500 (3500, 5500, 7500…).
- **Magnetic course 180–359°** → even thousand + 500 (4500, 6500, 8500…).
> "**East is least, west is best, plus 500 to keep us alive.**"
`
        }
      ]
    },

    /* ============================================================
       SECTION 6 — NAVIGATION
       ============================================================ */
    {
      id: "nav",
      title: "Navigation",
      blurb: "Pilotage, dead reckoning, VOR, GPS, and chart reading.",
      icon: "compass",
      topics: [

        {
          id: "nav-fundamentals",
          title: "Pilotage & Dead Reckoning",
          source: "PHAK Ch. 16",
          tags: ["phak", "navigation"],
          summary: "Time-Speed-Distance, wind correction, and course basics.",
          body: `
### Definitions
- **Pilotage** — navigation by visual reference to landmarks.
- **Dead reckoning** — computing heading, speed, time using known wind.
- **True course (TC)** — measured from a meridian on the chart.
- **True heading (TH) = TC ± wind correction angle (WCA)**.
- **Magnetic heading (MH) = TH ± variation** ("east is least, west is best" — *east variation is subtracted from TH*).
- **Compass heading (CH) = MH ± deviation** (read from compass card).

### Cardinal math
\`TC + WCA = TH; TH − var (E) or + var (W) = MH; MH ± dev = CH\`

### Time-Speed-Distance
- Time (min) = Distance (nm) ÷ GS (kt) × 60.
- GS = TAS adjusted for wind (headwind/tailwind component along course).
- Fuel = Time × GPH.

### Wind correction
- Headwind component = wind speed × cos(angle between wind and course).
- Crosswind component = wind speed × sin(angle).
- Fast-look angles: 30° → 0.5; 45° → 0.7; 60° → 0.87; 90° → 1.0 (all crosswind).
`
        },

        {
          id: "vor-gps",
          title: "VOR & GPS",
          source: "AIM Ch. 1; PHAK Ch. 16",
          tags: ["aim", "phak", "navigation"],
          summary: "Radials, intercepts, and when GPS can replace what.",
          body: `
### VOR basics
- **VHF Omnidirectional Range** — 108.0–117.95 MHz.
- **Radials** are magnetic courses **from** the station. **TO** indicates flying toward the station.
- The CDI shows your position relative to the **selected course (OBS)**, not your heading.
- **Service volumes:** Standard Service Volumes (SSV) — Terminal, Low, High. After Jan 2025, FAA introduced new VOR SSVs.

### Identifying & checking
- Always **identify the Morse code**.
- Required accuracy for IFR (§91.171):
  - **VOT** ±4°
  - Repaired **ground checkpoint** ±4°
  - **Airborne checkpoint** ±6°
  - **Dual VOR** ±4° between receivers

### GPS
- WAAS-equipped GPS provides **vertical guidance (LPV approaches)**.
- IFR enroute and approach use require:
  - Properly installed/certified equipment (TSO C-129/C-145/C-146).
  - Database current.
  - RAIM check or SBAS available for non-WAAS units.
- VFR use: handheld OK as primary if pilot is current and proficient — but cross-check with charts.

### CDI sensitivity
- **Enroute:** ±5 NM full-scale.
- **Terminal:** ±1 NM.
- **Approach (LNAV):** ±0.3 NM, transitioning to angular near runway.
`
        }
      ]
    },

    /* ============================================================
       SECTION 7 — AIRPORT OPS & COMMS
       ============================================================ */
    {
      id: "airport",
      title: "Airport Ops & Comms",
      blurb: "Markings, lighting, traffic patterns, and radio phraseology.",
      icon: "tower",
      topics: [

        {
          id: "markings-lighting",
          title: "Runway/Taxiway Markings & Lighting",
          source: "AIM Ch. 2",
          tags: ["aim", "airport"],
          summary: "What every line, light, and sign means.",
          body: `
### Runway markings
- **Threshold** — solid white piano keys.
- **Displaced threshold** — white arrows leading to a solid line; runway *behind* the line is OK for taxi/takeoff but **not for landing touchdown**.
- **Blast pad/stopway** — yellow chevrons; **not usable for takeoff, landing, or taxi**.
- **Aiming point** — two thick white stripes ~1,000 ft from threshold.
- **Touchdown zone** — coded white groups every 500 ft.
- **Centerline / edge** — white.
- **Closed runway** — large yellow X.

### Taxiway markings
- **Centerline** — yellow.
- **Hold short line:** **two solid + two dashed yellow lines.** *Solid on your side = stop.* Cross only with clearance.
- **ILS hold short:** ladder-like marking — required holding when ILS critical area is active.

### Signs
- **Mandatory:** **red** background, **white** lettering — runway holding, no entry.
- **Location:** **black** background, **yellow** lettering with yellow border (you are on taxiway A).
- **Direction:** **yellow** background, **black** lettering, with arrow.
- **Destination:** yellow background, indicates direction to a destination (e.g., apron).
- **Information/Runway Distance Remaining:** black background, white lettering (5 = 5,000 ft remaining).

### Runway lighting
- **REIL** — Runway End Identifier Lights, sequenced flashing white at threshold.
- **VASI/PAPI** — vertical guidance.
  - **VASI:** "Red over white, you're alright" / "white over white, fly all night (high)" / "red over red, you're dead (low)".
  - **PAPI:** 4 lights; **2 red 2 white = on glidepath**; all white = high; all red = low.
- **Runway edge lights:** white; yellow on last 2,000 ft (or half the runway, whichever less) for instrument runways.
- **Runway centerline lights:** white, alternating red/white last 3,000 ft, all red last 1,000 ft.
- **Threshold:** green facing approach end.
- **PCL (Pilot Controlled Lighting):** typically 7-5-3 keys on CTAF: 7 clicks max, 5 medium, 3 low. Stays on **15 minutes**.

### Light gun signals (towered, lost comm)
| Signal | On Ground | In Flight |
|---|---|---|
| Steady green | Cleared for takeoff | Cleared to land |
| Flashing green | Cleared to taxi | Return for landing (cleared to land follows) |
| Steady red | Stop | Give way, continue circling |
| Flashing red | Taxi clear of runway | Airport unsafe — do not land |
| Flashing white | Return to starting point on airport | n/a |
| Alternating red/green | Exercise extreme caution | Exercise extreme caution |
`
        },

        {
          id: "traffic-pattern",
          title: "Traffic Pattern & CTAF",
          source: "AIM 4-3; AC 90-66",
          tags: ["aim", "airport"],
          summary: "Standard pattern, altitudes, and self-announce phraseology.",
          body: `
### Standard pattern
- **Left traffic** unless otherwise noted (segmented circle / chart supplement).
- **Pattern altitude:** **1,000 AGL** for piston (1,500 AGL for turbine/large).
- Legs: departure, crosswind, **downwind**, **base**, **final**, upwind/go-around.
- Enter downwind at **45° to midfield**, pattern altitude.

### Altitudes
- Climb to within ~300 ft of pattern altitude before turning crosswind.
- Begin descent on downwind abeam the touchdown point (power back, carb heat as applicable).

### Self-announce on CTAF (non-towered)
> "Easton traffic, Skyhawk five-three-two-romeo-mike, ten miles south, two thousand five hundred, inbound for landing, Easton."

Calls typically made:
- **10 miles out**, intentions.
- **Entering downwind / turning base / turning final**, runway in use.
- **Clear of the runway**.

### Intersection / opposite traffic
- Use the runway aligned **most into the wind**.
- For straight-in approaches, **announce early**, watch for pattern traffic, defer if conflict.
`
        }
      ]
    },

    /* ============================================================
       SECTION 8 — AEROMEDICAL & ADM
       ============================================================ */
    {
      id: "human",
      title: "Human Factors",
      blurb: "Aeromedical, illusions, and aeronautical decision-making.",
      icon: "user",
      topics: [

        {
          id: "aeromedical",
          title: "Aeromedical Factors",
          source: "PHAK Ch. 17; AIM Ch. 8",
          tags: ["phak", "aim", "aeromed"],
          summary: "Hypoxia, hyperventilation, spatial disorientation, illusions.",
          body: `
### Hypoxia (lack of O2)
- **Hypoxic** — not enough O2 in the blood (altitude).
- **Hypemic** — blood can't carry O2 (anemia, **CO poisoning**, smoking, blood loss).
- **Stagnant** — circulation problem (G-loading, cold extremities).
- **Histotoxic** — cells can't use O2 (alcohol, drugs).

**Symptoms:** euphoria, judgment impairment, headache, tunnel/blue vision, cyanosis, fatigue.
**Treatment:** descend, supplemental O2, slow breathing.

### Hyperventilation
- Caused by stress/anxiety. Loss of CO₂ in blood.
- Symptoms: tingling, dizziness, lightheadedness — overlaps with hypoxia.
- **Treatment:** slow, controlled breathing; talk; breathe into a bag.

### Spatial disorientation
- Inner ear vs. eyes mismatch when visual references are lost.
- Common illusions:
  - **Leans** (after a slow roll, returning level feels like a bank).
  - **Coriolis** (head-tilt during a turn).
  - **Graveyard spiral** (descending turn feels level).
  - **Somatogravic** (acceleration → false climb sensation; deceleration → false descent).
- **Treatment:** trust your instruments.

### Visual illusions on approach
- **Narrow runway / upsloping terrain** → illusion of being **high** → tendency to fly **low**.
- **Wide runway / downsloping** → illusion of being **low** → tendency to fly **high**.
- **Featureless terrain (black hole) / haze** → illusion of being **high** → tendency to fly **low**.
- **Bright runway lights** → illusion of being **close**.

### Carbon monoxide
- Odorless. Comes from heater/exhaust leaks. Symptoms similar to hypoxia.
- **Treatment:** cabin heat OFF, vents open, supplemental O2, land ASAP.

### Alcohol & drugs (§91.17)
- **8 hours bottle to throttle**, **0.04% BAC max**, **no apparent effect**.
- **No flying within 8 hours** of alcohol or while under any influence affecting safety.

### Diving
- Wait **24 hours** after a dive requiring decompression *or* before flying above **8,000 MSL**.
- Wait **12 hours** after non-decompression dive before any flight.
`
        },

        {
          id: "adm",
          title: "Aeronautical Decision-Making",
          source: "PHAK Ch. 2; FAA ADM Handbook",
          tags: ["phak", "adm"],
          summary: "Frameworks: IMSAFE, PAVE, the 5 hazardous attitudes, DECIDE.",
          body: `
### IMSAFE (pilot self-assessment)
- **I**llness · **M**edication · **S**tress · **A**lcohol · **F**atigue · **E**motion

### PAVE (preflight risk)
- **P**ilot · **A**ircraft · en**V**ironment · **E**xternal pressures

### 5 Hazardous attitudes & antidotes
| Attitude | Statement | Antidote |
|---|---|---|
| Anti-authority | "Don't tell me." | Follow the rules — they're usually right. |
| Impulsivity | "Do it quickly." | Not so fast. Think first. |
| Invulnerability | "It won't happen to me." | It could happen to me. |
| Macho | "I can do it." | Taking chances is foolish. |
| Resignation | "What's the use?" | I'm not helpless. I can make a difference. |

### DECIDE
- **D**etect a change.
- **E**stimate the need to react.
- **C**hoose a desirable outcome.
- **I**dentify actions to control the change.
- **D**o the necessary action.
- **E**valuate the effect.

### CARE / TEAM (in-flight risk management)
- **CARE:** Consequences, Alternatives, Reality, External pressures.
- **TEAM:** Transfer (delegate), Eliminate, Accept, Mitigate.
`
        }
      ]
    },

    /* ============================================================
       SECTION 9 — ACS REFERENCE
       ============================================================ */
    {
      id: "acs",
      title: "ACS Reference",
      blurb: "Areas of operation and tolerances for the practical test.",
      icon: "checklist",
      topics: [

        {
          id: "acs-areas",
          title: "Areas of Operation (Private ASEL)",
          source: "FAA-S-ACS-6 — Private Pilot Airplane",
          tags: ["acs", "test"],
          summary: "Map of what you'll be tested on for each AoO.",
          body: `
| # | Area of Operation | Examples of Tasks |
|---|---|---|
| I | Preflight Preparation | Pilot quals, airworthiness, weather, XC planning, airspace, performance, systems, human factors |
| II | Preflight Procedures | Preflight assessment, flight deck management, engine starting, taxi, before-takeoff |
| III | Airport Ops | Comm, light signals, traffic patterns |
| IV | Takeoffs & Landings | Normal, soft-, short-field, forward slip, go-around |
| V | Performance Maneuvers | Steep turns |
| VI | Ground Reference | Rectangular, S-turns, turns around a point |
| VII | Navigation | Pilotage, dead reckoning, navigation systems, diversion, lost procedures |
| VIII | Slow Flight & Stalls | Slow flight, power-off stall, power-on stall, spin awareness |
| IX | Basic Instrument | Straight & level, climbs, descents, turns, recovery from unusual attitudes, emergency descent |
| X | Emergency Operations | Engine failure, system/equipment malfunction, ELT, fire, deploying equipment, lost procedures |
| XI | Night Operations | Knowledge: equipment, illusions, lighting |
| XII | Postflight | After-landing, parking, securing |

> Each Task lists Knowledge (K), Risk Management (R), and Skill (S) elements with measurable tolerances.
`
        },

        {
          id: "acs-tolerances",
          title: "Common Skill Tolerances",
          source: "FAA-S-ACS-6 (current revision)",
          tags: ["acs", "test"],
          summary: "Pass/fail bands for the maneuvers you'll fly on the checkride.",
          body: `
### General tolerances
| Maneuver | Altitude | Heading | Airspeed |
|---|---|---|---|
| Straight & level | ±100 ft | ±10° | ±10 kt |
| Steep turns | ±100 ft | rollout ±10° | ±10 kt; bank 45° |
| Slow flight | ±100 ft | ±10° | +10/−5 kt; just above stall warning |
| Power-off stall | recover promptly at first indication | wings level/coordinated | n/a |
| Power-on stall | n/a | n/a (specified bank ±10°) | n/a |
| Steep spiral | ±10 kt of recommended | n/a | maintain const radius/airspeed |
| Rect/S-turns/turns about point | ±100 ft, ±10 kt | n/a | bank typically 30–45° max |
| Normal landing | within touchdown zone, +10/−5 kt of approach speed | n/a | n/a |
| Short-field landing | within ±100 ft of specified touchdown point | n/a | n/a |
| Soft-field landing | smooth touchdown, no runway commitment until safe | n/a | n/a |
| Steep emergency descent | recover at specified altitude | airspeed below VNO | maintain w/in ±10 kt |
| Instrument basic flight | ±200 ft, ±20° / ±10 kt; recover from unusual attitudes promptly | | |

> Always confirm the **current ACS revision** — tolerances do change.
`
        }
      ]
    }
  ]
};
