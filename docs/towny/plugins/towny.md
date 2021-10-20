[[toc]]

# Towny
Information om inställningar vi har gjort i towny, kostnader, kommandon osv  
  
## Vildmarken  
I vildmarken gäller det att vara försiktig.  
Där kan det finnas spelare som vill förstöra och ta dina saker.  
Därför rekommenderar vi alltid alla att bygga i städer där man kan skydda sina saker.  
Om du mot förmodan skulle behöva/vill bygga i vildmarken så får du räkna med att andra spelare kan ta dina saker.

Du kan dock alltid skydda dina ugnar/kistor/barrels/dörrar m.m. med [LWC](lwc.md)  

## Skatt
Varje dag klockan 12:00 betalar alla städer, nationer och invånare skatt.  
Detta betyder att de städer/nationer kommer få in en summa från varje spelare vid detta klockslag.  
Alla betalar olika mycket i skatt beroende på din stads inställningar, stadens storlek osv.  
Kolla hur mycket du betalar med kommandot `/towny prices`  

## Ny stad
Att skapa en ny egen stad kan vara krångligt i början med alla kostnader och kommandon  
Nedan finns lite tips  
- Skriv kommandot `/towny prices` och se över alla priser  
- Dubbelkolla `/balance` och se till att du har minst 3000 mynt
- Hitta en plats där du vill ha staden och skriv `/t new (namn)` *Detta kostar 2000 mynt*
    - Om du är säker så bekräftar du kommandot
- Därefter skriver du `/t deposit 1000` för att sätta in lite pengar i staden så du klarar [skatten](?id=skatt) som kommer ligga på 10 mynt till en början men öka med 10 mynt per stadstomt du köper  

## Tomter

#### Bonustomter
Den första bonustomten du köper kommer att kosta din stad 500 mynt.  
Där efter kommer priset öka med 1% för varje bonustomt ni köper till staden.

## Ranker
::: danger
Tilldela ranker till spelare du litar på till 100%
:::
Dessa stadsranker finns på servern  

#### Assistant
Assistenter betalar ingen skatt till staden  
Denna rank är ger man till de som ska kunna hjälpa till i staden.  

Kommandon:
- /t claim | Köp område till staden
- /t add (invånare) | Bjud in spelare till staden
- /t toggle public | Aktiverar/avaktiverar publik /town spawn och koordinaterna på stadens hemtomt i /town
- /t rank add (namn) (vip/builder) | Ge en spelare en stadsrank
- /plot * | Alla plot kommandon
- /jail (nummer) (invånare) | Fängsla en kriminell

#### Assistant+
Denna rank har samma fördelar som ovan men med ett extra kommando

- /t withdraw (summa) | Ta ut en summa från stadens bank  

## Kommandon

### /towny  

*Visar alla `/towny` kommandon*  
::: details
`?` | Visar fler towny kommandon  
- `map` | Visar towny's karta
- `prices` | Visar skatter/kostnader som du har
- `time` | Visar hur lång tid det är kvar tills skatter från invånare och städer dras
- `top`
	- `land (all/resident/town)` | Visar en topplista på landägare
	- `residents (all/resident/town)` | Visar en topplista på invånare  
- `universe` - Visar all towny statistik, invånare/städer/nationer/världar räknar också köpta stadstomter.
:::

### /plot  

*Visar alla `/plot` kommandon*  
::: details
Alias: `/p`
- `claim` | Invånarkommando för att köpa en tomt som är till salu.
	- `auto` | Invånarkommando för att köpa en yta runt spelaren som skriver kommandot med tomter som är till salu
- `unclaim` | Invånarkommando för att sälja personliga tomter
	- `circle/rekt` | Sälj i form av cirkel eller rektangel
		- `# (radie runt din nuvarande position)` | Radien på ytan som du vill sälja  
- `forsale/fs (pris)` | Lägger ut gruppen till salu för priset du väljer
   - `circle/rect` - Anger form  
       - `# (radie runt din nuvarande position)` | Radien på ytan som du vill lägga ut till salu  
- `notforsale/nfs` | Gör att gruppen inte går att köpa
   - `circle/rect` - Anger form  
       - `# (radie runt din nuvarande position)` | Radien på ytan som du vill sluta sälja    
- `evict` | Används till att ta bort en tomt från tomtägaren. Används av Borgmästaren eller en assistant
- `perm` | Visar tillstånden på tomten du befinner dig i
- `perm hud` | Aktiverar/avaktiverar en scoreboard som visar tillstånd och info om tomten du befinner dig i
- `set` */plot set {subkommando}*
   - `reset` | Återställer en shop/embassy/arena/wilds tomt till en standardtomt
   - `shop` | Ändrar en tomt till en Affärstomt
	- `embassy` | Ändrar en tomt till en Ambassadtomt
   - `arena` | Ändrar en tomt till en arenatomt
	- `wilds` | Ändrar en tomt till en wildstomt
	- `inn` | Ändrar en tomt till en inntomt
	- `jail` | Ändrar en tomt till en fängelsetomt
	- `farm` | Ändrar en tomt till en farmtomt
	- `bank` | Ändrar en tomt till en banktomt
	- `outpost` | Ändrar en tomt till en outpost, *Detta kostar lika mycket som /t claim outpost*
	- `name` | Tillåter en borgmästare eller tomtägaren att byta namn på tomter som dom äger, skriver över ~Stadsmark meddelandet. Personliga tomter visar både det nya namnet och tomtägarens namn
	 - `perm`
		- `on/off` | Ändrar alla tillstånd på tomten du befinner dig i
		- `(resident/ally/outsider) on/off`
		- `(build/destroy/switch/itemuse) on/off`
		- `(resident/ally/outsider) (build/destroy/switch/itemuse) on/off`
		- `reset` | Återställer tomten som du befinner dig i till standardinställningarna som du ser i /town eller /resident. (beror på om tomten ägs av staden eller av en invånare)
- `toggle`
	- `fire` | Aktiverar/avaktiverar eldspridning på den tomten du befinner dig
	- `pvp` | Aktiverar/avaktiverar pvp på den tomten du befinner dig
	- `explosion` | Aktiverar/avaktiverar explosioner på den tomten du befinner dig
	- `mobs` | Aktiverar/avaktiverar mobs på den tomten du befinner dig
- `clear` | Kommando för att ta bort en lista av blocks från en tomt. Används av en Borgmästare på en stadsägd tomt eller av en tomtägare på dess egen tomt
- `group`
	- `add|new|create (gruppnamn)` | Skapar en tomtgrupp där spelaren står. Lägger även till tomter till en befintlig grupp
	- `remove` | Tar bort tomten du står på från dess grupp
	- `rename (gruppnamn)` | Döper om en tomtgrupp
	- `set (tomttyp)` | Ändrar en tomt till en specifik typ. Går ej att använda för fängelsetomter
	- `set perm ...` | Används till att ställa in tillstånd för gruppen du befinner dig i. Se sektionen ovan för /plot set perm
	- `toggle ...` | Används för att ändra grupp inställningar. Se sektionen ovan för /plot toggle
	- `forsale/fs (pris)` | Lägger ut gruppen till salu för priset du väljer
       - `circle/rect` - Anger form  
           - `# (radie runt din nuvarande position)` | Radien på ytan som du vill lägga ut till salu  
	- `notforsale/nfs` | Gör att gruppen inte går att köpa
       - `circle/rect` - Anger form  
           - `# (radie runt din nuvarande position)` | Radien på ytan som du vill sluta sälja    
:::

### /resident  

*Visar information om dig*  
::: details
Alias: `/res`
- `?` | Visar alla tillgängliga kommandon
- `(invånare)` | Visar information om spelaren
- `friend`
	- `add (invånare) .. (invånare)` | Lägg till en spelare som är online till din vänlista
	- `add+ (invånare) .. (invånare)` | Lägg till en spelare som är offline till din vänlista
	- `remove (invånare) .. (invånare)` | Ta bort en spelare som är online från din vänlista
	- `remove+ (invånare) .. (invånare)` | Ta bort en spelare som är offline från din vänlista
	- `clearlist` | Tar bort alla dina vänner
	- `list` | Visar en lista på alla dina vänner
- `jail paybill` | Tillåter en spelare att betala för att få komma ut ur fängelse. Pengarna går till staden som äger fängelset
- `list` | Visar en lista på alla som är online
- `spawn` | Tar dig till din stads spawn
- `toggle`
	- `map` | Aktiverar en karta som uppdateras när du flyttar dig mellan tomter
	- `townclaim` | Aktiverar ett läge där /town claim automatiskt används när du flyttar dig mellan tomter
	- `plotborder` | Aktiverar rök på tomternas gränser. Gränsen visas när du flyttar dig mellan olika stadstomter
	- `constantplotborder` | Aktiverar rök på tomternas gränser. Gränsen försvinner inte
	- `ignoreplots` | Aktiverar/avaktiverar tomt notiser i städer
	- `reset` | Stänger av alla lägen som är aktiva
- `set`
	- `perm`
		- `on/off` | Ändrar alla dina tillstånd som du kan se i /resident
		- `(friend/ally/outsider) on/off`
		- `(build/destroy/switch/itemuse) on/off`
		- `(friend/ally/outsider) (build/destroy/switch/itemuse) on/off`
		- `reset` | Detta kommandot återställer alla dina tomter till inställningarna du har i /resident`
- `tax` | Visar hur mycket skatt du betalar
:::

### /town  

*Visar info om din stad*  
::: details
Alias: `/t`
- `?` | Visar alla tillgängliga /town kommandon
- `(stad)` | Visar info om staden
- `here` | Visar info om staden du befinner dig i
- `leave` | Lämna en stad
- `list`
	- `(sid #)`
	- `by name (#)` | Sortera listan på namn
	- `by resident (#)` | Sortera listan på antal invånare
	- `by balance (#)` | Sortera listan på städer med mest pengar
	- `by townblocks (#)` | Sortera listan på städer med flest stadstomter
	- `by online (#)` | Sortera listan på städer med flest online invånare
	- `by open (#)` | Sortera listan på öppna städer
- `online` | Visar vilka spelare som är online i din stad
- `plots (stadsnamn)` | Visar en hjälpsam lista av tomter och dess typer/inkomst som ägs av staden
- `new (stadsnamn)` | Skapar en ny stad
- `add (invånare) .. (invånare)` | Bjud in spelare till din stad. För Borgmästare och assistenter
- `kick (invånare) .. (invånare)` | Sparka ut en spelare från din stad. För borgmästare
- `spawn` | Teleportera dig till stadens spawn
	- `(stad)` | Teleportera dig till en annan stads spawn
- `claim` | Köp tomten du står i till din stad. För borgmästare & assistenter
	- `outpost <#|(namn)|(namn:#)` | Köp en outpost till din stad. (namn) använder tomtnamnet. (namn:#) används när tomtnamnet startar med en siffra
	- `# (radie runt din nuvarande position)` | Köper en yta av stadstomter runt dig
	- `auto` | Köp så många stadstomter runt dig som går. (Hur många som går baseras på hur mycket pengar & tillgängliga stadstomter din stad har)
- `unclaim` | Sälj stadstomten du står i
	- `all` | Sälj ALLA stadstomter
	- `# (radie runt din nuvarande position)` | Sälj en yta av stadstomter runt dig
- `withdraw (mynt)` | Ta ut pengar från din stadsbank
- `deposit (mynt)` | Sätt in pengar i din stadsbank
- `buy`
	- `bonus (antal)` | Köp tillgängliga bonus tomter
- `delete` | Ta bort din stad och all data som tillhör den
- `outlawlist (stad)` | Visar en lista på kriminella i staden
- `outlaw (add/remove) (namn)` | Lägg till eller ta bort en kriminell från listan
- `outpost`
	- `(#) nummer på outposten` | Teleportera dig till outpost
	- `list` | Visar en lista på alla outpost
- `ranklist` | Visar invånare och deras ranker
- `rank (add/remove) (invånare) (ranknamn)` Befordra/ta bort en spelare till en rank i staden
- `reslist (stadsnamn)` | Se en lista på alla invånare i en stad
- `say (meddelande)` | Sänd ett meddelande till alla online invånare
- `set`
	- `board (meddelande)` | Visa ett meddelande för invånare varje gång de loggar in
	- `mayor (invånare)` | Ge borgmästare statusen till en annan invånare
	- `homeblock` | Sätt hemblock och spawn för din stad
	- `spawn` | Sätt stadens spawn. Måste göras inom ett hemblock
	- `spawncost (mynt)` | Bestäm vad det ska kosta att teleportera till en publik stad. Invånare, nation medlemmar och allierade påverkas ej
	- `name (namn)` | Ändra din stads namn <ins>*detta kostar 20.000 mynt*</ins>
	- `outpost` | Ändrar outpostens spawn till platsen du står på. Måste användas inom en existerande outpost tomt
	- `jail` | Ändrar fängelsetomtens spawn till platsen du står på. Måste användas inom en existerande fängelsetomt
	- `perm`
		- `on/off` | Ändrar alla tillstånd inom staden. VAR FÖRSIKTIG
		- `(resident/ally/outsider) on/off`
		- `(build/destroy/switch/itemuse) on/off`
		- `(resident/ally/outsider) (build/destroy/switch/itemuse) on/off`
		- `reset` | Tar alla tillstånd från /town och tillämpar på alla tomter som staden äger
   - `tag {upto4character}` - Ange stadens tagg, som i vissa fall används i chatten.
       - `clear` - Tar bort stadens tagg
	- `taxes (mynt)` | Bestämmer hur mycket skatt som ska samlas in från varje invånare dagligen. Sätter även % om skattprocent är aktiverat
	- `taxpercentcap (mynt)` | Den maximala summan som kan bli insamlad när skattprocent är aktiverat
	- `plotprice (mynt)` | Bestämmer standard kostnad på tomter i staden
	- `shopprice (mynt)` | Bestämmer standard konstnad på affärtomter i staden
	- `shoptax (mynt)` | Bestämmer hur mycket skatt varje invånare ska betala per affärstomt de äger
	- `embassyprice (mynt)` | Bestämmer hur mycket en embassadtomt ska kosta
	- `embassytax (mynt)` | Bestämmer hur mycket skatt det ska kosta per dag per embassadtomt spelare äger
	- `title (namn) (titelhär)` | Borgmästaren kan med detta kommando ge en invånare en titel
	- `surname (namn) (andranamn)` | Borgmästaren kan med detta kommando ge en invånare ett andranamn
- `toggle`
	- `explosion` | Aktiverar/avaktiverar explosioner i staden
	- `fire` | Aktiverar/avaktiverar eldspridning i staden
	- `mobs` | Aktiverar/avaktiverar mobs i staden
	- `public` | Aktiverar/avaktiverar publik /town spawn och koordinaterna på stadens hemtomt i /town
	- `pvp` | Aktiverar/avaktiverar pvp i staden
	- `taxpercent` | Aktiverar/avaktiverar procentskatt i staden
	- `open` | Aktiverar/avaktiverar tillåtelse för alla att gå med i staden
	- `jail (nummer) (invånarnamn) (dagar)` | Skickar en invånare i din stad till fängelset du anger. Samma kommando släpper en spelare från fängelset
   - `join {stadsnamn}` - Används till att gå med i en stad som inte kräver inbjudan (öppen).
:::

### /nation  

*Visar info om din nation*  
::: details
Alias: `/n`
- `?` | Visar alla tillgängliga /nation kommandon
- `list`
	- `(sid #)`
	- `by name (#)` | Sortera listan på namn
	- `by resident (#)` | Sortera listan på antal invånare
	- `by balance (#)` | Sortera listan på nationer med mest pengar
	- `by towns (#)` | Sortera listan på nationer med flest städer
	- `by townblocks (#)` | Sortera listan på nationer med flest stadstomter
	- `by online (#)` | Sortera listan på nationer med flest online invånare
- `online` | Visar vem som är online i din nation
- `(nation)` | Visar information om en annan nation än den du är med i
- `leave` | Lämna din nuvarande nation. Endast borgmästare kan använda detta kommando
- `withdraw (mynt)` | Ta ut pengar från din nationsbank
- `deposit (mynt)` | Sätt in pengar i din nationsbank
- `deposit (mynt) (stad)` | Sätt in pengar i en stad som är med i nationen
- `new (namn)` | Skapa en ny nation
- `rank` | Kommando för att sätta assistant/egen rank i nationen
- `add (stad) .. (stad)` | Bjuder in/lägger till städer i din nation
- `kick (stad) .. (stad)` | Sparkar ut en stad från din nation
- `delete (nation)` | Raderar din nation
- `ally`
	- `add (nation) .. (nation)` | Lägger till en nation till din allianslista
	- `remove (nation) .. (nation)` | Tar bort en nation från din allianslista
- `enemy`
	- `add (nation) .. (nation)` | Lägger till en nation till din fiendelista
	- `remove (nation) .. (nation)` | Tar bort en nation från din fiendelista
- `rank (add|remove) (invånare) (rank)` | Befordra/ta bort en spelare till en rank i nationen
- `say (meddelande)` | Sänd ett meddelande till alla online nations medlemmar
- `set`
	- `king (invånare)` | Kröna en invånare till kung
	- `capital (stad)` | Sätt huvudstad och kung i nationen
	- `board (meddelande)` | Visa ett meddelande för invånare varje gång de loggar in
	- `taxes (mynt)` | Bestämmer hur mycket skatt som skall samlas in från städer varje dag
	- `name (namn)` | Byt nationens namn
	- `spawn` | Bestäm vart nationens spawn ska vara
	- `spawncost` | Bestäm vad det ska kosta att teleportera till en publik nation. Invånare, nation medlemmar och allierade påverkas ej
	- `title (namn) (titelhär)` | Kungen kan med detta kommando ge en invånare en titel
	- `surname (namn) (andranamn)` | Kungen kan med detta kommando ge en invånare ett andranamn
	- `mapcolor (färg)` | Bestämmer vilken färg som nationen ska ha på dynmap
- `toggle`
	- `neutral` | Om din nation skall visas som neutral och betala en daglig kostnad för detta under krig
	- `open` | Gör din nation öppen för alla städer som vill gå med utan inbjudan
- `join (nation)` | Används av en borgmästare för att gå med i en öppen nation
- `merge (nationnamn)`  
	 - Skickar en förfrågan till nationen att gå ihop med din nation.  
Kan endast användas av nationens kung och kräver att den andra nationens kung accepterar inbjudan.  
Den kung som svarar på förfrågan kommer motta ett bekräftelse meddelande som frågar om den accepterar upplösningen av dess nation.  
Om den bekräftas så kommer städerna från nationen att överföras till den upplösta nationen tillsammans med den upplösta nationens pengar
- `townlist (nation)` | (nation) är frivilligt. Visar en lista på städer som är med i nationen
- `allylist (nation)` | (nation) är frivilligt. Visar en lista på allierade till nationen
- `enemylist (nation)` | (nation) är frivilligt. Visar en lista på fiender till nationen
### Chatt Kommandon
- `/townychat, /tc` | Skriv endast med spelare i din stad. Du kan även skriva meddelande direkt /tc (meddelande)
- `/nationchat, /nc` | Skriv endast med spelare i din nation. Du kan även skriva meddelande direkt /nc (meddelande)
- `/global, /g` | Skriv med alla på servern. Du kan även skriva meddelande direkt /g (meddelande)
- `/res set mode reset` | Återställ chattläget till standardchatt
- `/channel leave|join (kanal)` | Gå med eller lämna en kanal
- `/ch list` | Lista på vilka kanaler du ser meddelanden från
:::