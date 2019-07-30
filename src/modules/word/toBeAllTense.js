function AllTense() {
  const toBePresentPositive = [
    "Jaz sem",
    "Ti si",
    "On/Ona/Ono je",
    "Midva/Midve sva",
    "Vidva/Vidve sta",
    "Onadva/Onidve sta",
    "Mi/Me smo",
    "Vi/Ve ste",
    "Oni/One so"
  ];

  const toBePresentNegative = [
    "Jaz nisem",
    "Ti nisi",
    "On/Ona/Ono ni",
    "Midva/Midve nisva",
    "Vidva/Vidve nista",
    "Onadva/Onidve nista",
    "Mi/Me nismo",
    "Vi/Ve niste",
    "Oni/One niso"
  ];

  const toBePastPositive = [
    "Jaz sem bil",
    "Ti si bil",
    "On je bil",
    "Ona je bila",
    "Ono je bilo",
    "Midva sva bila",
    "Midve sva bile",
    "Vidva sta bila",
    "Vidve sta bile",
    "Onadva sta bila",
    "Onidve sta bile",
    "Mi smo bili",
    "Me smo bile",
    "Vi ste bili",
    "Ve ste bile",
    "Oni so bili",
    "One so bile"
  ];

  const toBePastNegative = [
    "Jaz nisem bil",
    "Ti nisi bil",
    "On ni bil",
    "Ona ni bila",
    "Ono ni bilo",
    "Midva nisva bila",
    "Midve nisva bile",
    "Vidva nista bila",
    "Vidve nista bile",
    "Onadva nista bila",
    "Onidve nista bile",
    "Mi nismo bili",
    "Me nismo bile",
    "Vi niste bili",
    "Ve niste bile",
    "Oni niso bili",
    "One niso bile"
  ];

  const toBeFuturePositive = [
    "Jaz bom",
    "Ti boš",
    "On/Ona/Ono bo",
    "Midva/Midve bova",
    "Vidva/Vidve bosta",
    "Onadva/Onidve bosta",
    "Mi/Me bomo",
    "Vi/Ve boste",
    "Oni/One bodo"
  ];

  const toBeFutureNegative = [
    "Jaz nebom",
    "Ti ne boš",
    "On/Ona/Ono nebo",
    "Midva/Midve ne bova",
    "Vidva/Vidve ne bosta",
    "Onadva/Onidve ne bosta",
    "Mi/Me ne bomo",
    "Vi/Ve ne boste",
    "Oni/One ne bodo"
  ];

  return (
    toBePresentPositive,
    toBePresentNegative,
    toBePastPositive,
    toBePastNegative,
    toBeFuturePositive,
    toBeFutureNegative
  );
}
export { AllTense };
