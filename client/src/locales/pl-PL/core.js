import dateFns from 'date-fns/locale/pl';
import timeAgo from 'javascript-time-ago/locale/pl';

import markdownEditor from './markdown-editor.json';

export default {
  dateFns,
  timeAgo,
  markdownEditor,

  format: {
    date: 'd/M/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd MMM',
    longDateTime: "d MMMM 'o' p",
    fullDate: 'd MMM y',
    fullDateTime: "d MMMM y 'o' p",
  },

  translation: {
    common: {
      aboutPlanka: 'O PLANKA',
      account: 'Konto',
      actions: 'Akcje',
      activateUser_title: 'Aktywuj Użytkownika',
      active: 'Aktywny',
      addAttachment_title: 'Dodaj Załącznik',
      addCustomFieldGroup_title: 'Dodaj Grupę Własnych Pól',
      addCustomField_title: 'Dodaj Własne Pole',
      addManager_title: 'Dodaj Zarządcę',
      addMember_title: 'Dodaj Członka',
      addTaskList_title: 'Dodaj Listę Zadań',
      addUser_title: 'Dodaj Użytkownika',
      admin: 'Administrator',
      administration: 'Administracja',
      all: 'Wszystko',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Wszystkie zmiany zostaną automatycznie zapisane<br />po przywróceniu połączenia.',
      alphabetically: 'Alfabetycznie',
      alwaysDisplayCardCreator: 'Zawsze pokazuj twórcę karty',
      archive: 'Archiwum',
      archiveCard_title: 'Archiwizuj Kartę',
      archiveCards_title: 'Archiwizuj Karty',
      areYouSureYouWantToActivateThisUser: 'Jesteś pewien że chcesz aktywować tego użytkownika?',
      areYouSureYouWantToArchiveCards: 'Jesteś pewien że chcesz archiwizować karty?',
      areYouSureYouWantToArchiveThisCard: 'Jesteś pewien że chcesz archiwizować tę kartę?',
      areYouSureYouWantToAssignThisProjectManagerAsOwner:
        'Jesteś pewien że chcesz przypisać tego zarządcę jako właściciela projektu?',
      areYouSureYouWantToDeactivateThisUser:
        'Jesteś pewien że chcesz dezaktywować tego użytkownika?',
      areYouSureYouWantToEmptyTrash: 'Jesteś pewien że chcesz opróżnić kosz?',
      areYouSureYouWantToLeaveBoard: 'Jesteś pewien że chcesz opuścić tablicę?',
      areYouSureYouWantToLeaveProject: 'Jesteś pewien że chcesz opuścić projekt?',
      areYouSureYouWantToMakeThisProjectShared: 'Jesteś pewien że chcesz udostępnić ten projekt?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Jesteś pewien że chcesz usunąć tego zarządcę z projektu?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Jesteś pewien że chcesz usunąć tego członka z tablicy?',
      assignAsOwner_title: 'Przypisz Jako Właściciela',
      atLeastOneListMustBePresent: 'Przynajmniej jedna lista musi istnieć',
      attachment: 'Załącznik',
      attachments: 'Załączniki',
      authentication: 'Uwierzytelnianie',
      background: 'Tło',
      baseCustomFields_title: 'Bazowe Pola Własne',
      baseGroup: 'Grupa bazowa',
      board: 'Tablica',
      boardActions_title: 'Akcje Tablicy',
      boardNotFound_title: 'Tablica Nie Znaleziona',
      boardSubscribed: 'Zasubskrybowano Tablicę',
      boardUser: 'Użytkownik Tablicy',
      byCreationTime: 'Po dacie utworzenia',
      byDefault: 'Domyślnie',
      byDueDate: 'Po dacie wykonania',
      canBeInvitedToWorkInBoards: 'Może być zaproszony do pracy przy tablicach.',
      canComment: 'Może komentować',
      canCreateOwnProjectsAndBeInvitedToWorkInOthers:
        'Może tworzyć własne projekty i być zaproszony do pracy w innych.',
      canEditBoardLayoutAndAssignMembersToCards:
        'Może edytować układ tablicy i przypisywać użytkowników do kart.',
      canManageSystemWideSettingsAndActAsProjectOwner:
        'Może zarządzać ustawieniami systemowymi i działać jako właściciel projektu.',
      canOnlyViewBoard: 'Może tylko wyświetlać tablicę.',
      cardActions_title: 'Akcje Karty',
      cardNotFound_title: 'Karta Nie Znaleziona',
      cardsOnThisListAreAvailableToAllBoardMembers:
        'Karty na tej liście są dostępne dla wszystkich członków tablicy.',
      cardsOnThisListAreCompleteAndReadyToBeArchived:
        'Karty na tej liście są ukończone i gotowe do zarchiwizowania.',
      cardsOnThisListAreReadyToBeWorkedOn: 'Karty na tej liście są gotowe do pracy nad nimi.',
      clickHereOrRefreshPageToUpdate: '<0>Naciśnij tutaj</0> lub odśwież stronę, by zaktualizować.',
      closed: 'Zamknięte',
      color: 'Kolor',
      comments: 'Komentarze',
      contentExceedsLimit: 'Zawartość przekracza {{limit}}',
      copy_inline: 'kopiuj',
      createBoard_title: 'Utwórz Tablicę',
      createCustomFieldGroup_title: 'Utwórz Grupę Pól Własnych',
      createLabel_title: 'Utwórz Oznaczenie',
      createNewOneOrSelectExistingOne: 'Stwórz nowe lub wybierz<br />istniejące.',
      createProject_title: 'Utwórz Projekt',
      createTextFile_title: 'Utwórz Plik Tekstowy',
      creator: 'Twórca',
      currentPassword: 'Obecne Hasło',
      customFieldGroup_title: 'Grupa Pól Własnych',
      customFieldGroups_title: 'Grupy Pól Własnych',
      customField_title: 'Własne Pole',
      customFields_title: 'Własne Pola',
      dangerZone_title: 'Strefa Niebezpieczeństwa',
      date: 'Data',
      deactivateUser_title: 'Dezaktywuj Użytkownika',
      defaultCardType_title: 'Domyślny Typ Karty',
      defaultView_title: 'Domyślny Widok',
      deleteAttachment_title: 'Usuń Załącznik',
      deleteBackgroundImage_title: 'Usuń Tło',
      deleteBoard_title: 'Usuń Tablicę',
      deleteCardForever_title: 'Usuń Kartę Permamentnie',
      deleteCard_title: 'Usuń Kartę',
      deleteComment_title: 'Usuń Komentarz',
      deleteCustomFieldGroup_title: 'Usuń Grupę Pól Własnych',
      deleteCustomField_title: 'Usuń Pole Własne',
      deleteLabel_title: 'Usuń Oznaczenie',
      deleteList_title: 'Usuń Listę',
      deleteNotificationService_title: 'Usuń Serwis Powiadomień',
      deleteProject_title: 'Usuń Projekt',
      deleteTaskList_title: 'Usuń Listę Zadań',
      deleteTask_title: 'Usuń Zadanie',
      deleteUser_title: 'Usuń Użytkownika',
      deletedUser_title: 'Usunięty Użytkownik',
      description: 'Opis',
      detectAutomatically: 'Wykryj automatycznie',
      display: 'Wyświetlanie',
      dropFileToUpload: 'Upuść plik aby wgrać',
      dueDate_title: 'Termin',
      dynamicAndUnevenlySpacedLayout: 'Dynamiczny i nierówny układ.',
      editAttachment_title: 'Edytuj Załącznik',
      editAvatar_title: 'Edytuj Awatar',
      editColor_title: 'Edytuj Kolor',
      editCustomFieldGroup_title: 'Edytuj Grupę Pól Własnych',
      editCustomField_title: 'Edytuj Pole Własne',
      editDueDate_title: 'Edytuj Termin',
      editEmail_title: 'Edytuj E-mail',
      editInformation_title: 'Edytuj Informacje',
      editLabel_title: 'Edytuj Oznaczenie',
      editPassword_title: 'Edytuj Hasło',
      editPermissions_title: 'Edytuj Uprawnienia',
      editRole_title: 'Edytuj Rolę',
      editStopwatch_title: 'Edytuj Stoper',
      editType_title: 'Edytuj Typ',
      editUsername_title: 'Edytuj Nazwę Użytkownika',
      editor: 'Edytor',
      editors: 'Edytorzy',
      email: 'E-mail',
      emptyTrash_title: 'Opróżnij Kosz',
      enterCardTitle: 'Podaj tytuł karty...',
      enterDescription: 'Podaj opis...',
      enterFilename: 'Podaj nazwę pliku',
      enterListTitle: 'Podaj tytuł listy...',
      enterTaskDescription: 'Podaj opis zadania...',
      filterByLabels_title: 'Filtruj Po Oznaczeniach',
      filterByMembers_title: 'Filtruj Po Członkach',
      forPersonalProjects: 'Dla projektów osobistych.',
      forTeamBasedProjects: 'Dla projektów zespołowych.',
      fromComputer_title: 'Z Komputera',
      fromTrello: 'Z Trello',
      general: 'Ogólne',
      gradients: 'Gradienty',
      grid: 'Siatka',
      hideFromProjectListAndFavorites: 'Ukryj z listy projektów i ulubionych',
      hours: 'Godzin',
      importBoard_title: 'Importuj Tablicę',
      invalidCurrentPassword: 'Błędne obecne hasło',
      kanban: 'Kanban',
      labels: 'Oznaczenia',
      language: 'Język',
      leaveBoard_title: 'Opuść Tablicę',
      leaveProject_title: 'Opuść Projekt',
      limitCardTypesToDefaultOne: 'Ogranicz typy kart do domyślnego',
      list: 'Lista',
      listActions_title: 'Akcje Listy',
      lists: 'Listy',
      makeProjectShared_title: 'Udostępnij Projekt',
      managers: 'Zarządcy',
      memberActions_title: 'Akcje Członków',
      members: 'Członkowie',
      minutes: 'Minut',
      moveCard_title: 'Przenoszenie Karty',
      myOwn_title: 'Moje',
      name: 'Nazwa',
      newEmail: 'Nowy e-mail',
      newPassword: 'Nowe hasło',
      newUsername: 'Nowa nazwa użytkownika',
      newVersionAvailable: 'Nowa wersja dostępna',
      newestFirst: 'Najpierw najnowsze',
      noBoards: 'Brak tablic',
      noConnectionToServer: 'Brak połączenia z serwerem',
      noLists: 'Brak list',
      noProjects: 'Brak projektów',
      noUnreadNotifications: 'Brak nieprzeczytanych powiadomień.',
      notifications: 'Powiadomienia',
      oldestFirst: 'Najpierw najstarsze',
      openBoard_title: 'Otwórz Tablicę',
      optional_inline: 'opcjonalny',
      organization: 'Organizacja',
      others: 'Inne',
      phone: 'Telefon',
      plankaUsesAppriseToSendNotificationsToOver100PopularServices:
        'PLANKA używa <1><0>Apprise</0></1> do wysyłania powiadomień do ponad 100 popularnych serwisów.',
      preferences: 'Preferencje',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Podpowiedź: naciśnij Ctrl-V (Cmd-V na Macu) aby dodać załącznik ze schowka.',
      private: 'Prywatne',
      project: 'Projekt',
      projectNotFound_title: 'Projektu Nie Znaleziono',
      projectOwner: 'Właściciel projektu',
      referenceDataAndKnowledgeStorage: 'Odnoś się do danych i przechowuj wiedzę',
      removeManager_title: 'Usuń Zarządcę',
      removeMember_title: 'Usuń Członka',
      role: 'Rola',
      searchCards: 'Szukaj kart...',
      searchCustomFieldGroups: 'Szukaj grup pól własnych...',
      searchCustomFields: 'Szukaj pól własnych...',
      searchLabels: 'Szukaj oznaczeń...',
      searchLists: 'Szukaj list...',
      searchMembers: 'Szukaj członków...',
      searchProjects: 'Szukaj projektów...',
      searchUsers: 'Szukaj użytkowników...',
      seconds: 'Sekund',
      selectAssignee_title: 'Wybierz Osobę Przypisaną',
      selectBoard: 'Wybierz tablicę',
      selectList: 'Wybierz listę',
      selectListToRestoreThisCard: 'Wybierz listę, na którą ma być przywrócona ta karta',
      selectOrder_title: 'Wybierz Kolejność',
      selectPermissions_title: 'Wybierz Uprawnienia',
      selectProject: 'Wybierz projekt',
      selectRole_title: 'Wybierz Rolę',
      selectType_title: 'Wybierz Typ',
      sequentialDisplayOfCards: 'Sekwencyjne wyświetlania kart.',
      settings: 'Ustawienia',
      shared: 'Udostępniane',
      sharedWithMe_title: 'Udostępniane Dla Mnie',
      showOnFrontOfCard: 'Pokazuj na przodzie karty',
      sortList_title: 'Sortowanie Listy',
      stopwatch: 'Stoper',
      story: 'Scenorys',
      subscribeToCardWhenCommenting: 'Subskrybuj kartę przy komentowaniu',
      subscribeToMyOwnCardsByDefault: 'Subskrybuj moje karty automatycznie',
      taskActions_title: 'Akcje Zadań',
      taskAssignmentAndProjectCompletion: 'Przypisanie zadań i stopień ukończenia projektów.',
      taskListActions_title: 'Akcje Listy Zadań',
      taskList_title: 'Lista Zadań',
      team: 'Zespół',
      thereIsNoPreviewAvailableForThisAttachment: 'Brak podglądu dostępnego dla tego załącznika.',
      time: 'Czas',
      title: 'Tytuł',
      trash: 'Kosz',
      trashHasBeenSuccessfullyEmptied: 'Kosz opróżniony pomyślnie.',
      turnOffRecentCardHighlighting: 'Wyłącz podświetlanie nowych kart',
      typeNameToConfirm: 'Wpisz nazwę aby potwierdzić.',
      typeTitleToConfirm: 'Wpisz tytuł aby potwierdzić.',
      unsavedChanges: 'Niezapisane zmiany',
      uploadedImages: 'Wgrane obrazy',
      userActions_title: 'Akcje Użytkownika',
      userAddedCardToList: '<0>{{user}}</0> dodał <2>{{card}}</2> do {{list}}',
      userAddedThisCardToList: '<0>{{user}}</0> dodał tę kartę do {{list}}',
      userAddedUserToCard: '<0>{{actorUser}}</0> dodał {{addedUser}} do <4>{{card}}</4>',
      userAddedUserToThisCard: '<0>{{actorUser}}</0> dodał {{addedUser}} do tej karty',
      userAddedYouToCard: '<0>{{user}}</0> dodał cię do <2>{{card}}</2>',
      userCompletedTaskOnCard:
        '<0>{{user}}</0> oznaczył {{task}} jako ukończone na <4>{{card}}</4>',
      userCompletedTaskOnThisCard: '<0>{{user}}</0> oznaczył {{task}} jako ukończone na tej karcie',
      userJoinedCard: '<0>{{user}}</0> dołączył do <2>{{card}}</2>',
      userJoinedThisCard: '<0>{{user}}</0> dołączył do tej karty',
      userLeftCard: '<0>{{user}}</0> opuścił <2>{{card}}</2>',
      userLeftNewCommentToCard:
        '<0>{{user}}</0> zamieścił komentarz «{{comment}}» na <2>{{card}}</2>',
      userLeftThisCard: '<0>{{user}}</0> opuścił tę kartę',
      userMarkedTaskIncompleteOnCard:
        '<0>{{user}}</0> oznaczył {{task}} jako nieukończone na <4>{{card}}</4>',
      userMarkedTaskIncompleteOnThisCard:
        '<0>{{user}}</0> oznaczył {{task}} jako nieukończone na tej karcie',
      userMovedCardFromListToList:
        '<0>{{user}}</0> przeniósł <2>{{card}}</2> z {{fromList}} do {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0> przeniósł tę kartę z {{fromList}} do {{toList}}',
      userRemovedUserFromCard: '<0>{{actorUser}}</0> usunął {{removedUser}} z <4>{{card}}</4>',
      userRemovedUserFromThisCard: '<0>{{actorUser}}</0> usunął {{removedUser}} z tej karty',
      username: 'Nazwa Użytkownika',
      users: 'Użytkownicy',
      viewer: 'Wyświetlający',
      viewers: 'Wyświetlający',
      visualTaskManagementWithLists: 'Wizualne zarządzanie zadaniami z listami.',
      withoutBaseGroup: 'Bez grupy bazowej',
      writeComment: 'Napisz komentarz...',
    },

    action: {
      activateUser: 'Aktywuj użytkownika',
      activateUser_title: 'Aktywuj Użytkownika',
      addAnotherCard: 'Dodaj kolejną kartę',
      addAnotherList: 'Dodaj kolejną listę',
      addAnotherTask: 'Dodaj kolejne zadanie',
      addCard: 'Dodaj kartę',
      addCard_title: 'Dodaj Kartę',
      addComment: 'Dodaj komentarz',
      addCustomField: 'Dodaj własne pole',
      addCustomFieldGroup: 'Dodaj grupę własnych pól',
      addList: 'Dodaj listę',
      addMember: 'Dodaj członka',
      addMoreDetailedDescription: 'Dodaj szczegółowy opis',
      addTask: 'Dodaj zadanie',
      addTaskList: 'Dodaj listę zadań',
      addToCard: 'Dodaj do karty',
      addUser: 'Dodaj użytkownika',
      archive: 'Archiwizuj',
      archiveCard: 'Archiwizuj kartę',
      archiveCard_title: 'Archiwizuj Kartę',
      archiveCards: 'Archiwizuj karty',
      archiveCards_title: 'Archiwizuj Karty',
      assignAsOwner: 'Przypisz jako właściciela',
      cancel: 'Anuluj',
      createBoard: 'Utwórz tablicę',
      createCustomFieldGroup: 'Utwórz grupę pól własnych',
      createFile: 'Utwórz plik',
      createLabel: 'Utwórz oznaczenie',
      createNewLabel: 'Utwórz nowe oznaczenie',
      createProject: 'Utwórz projekt',
      deactivateUser: 'Dezaktywuj użytkownika',
      deactivateUser_title: 'Dezaktywuj Użytkownika',
      delete: 'Usuń',
      deleteAttachment: 'Usuń attachment',
      deleteAvatar: 'Usuń awatar',
      deleteBackgroundImage: 'Usuń tło',
      deleteBoard: 'Usuń tablicę',
      deleteBoard_title: 'Usuń Tablicę',
      deleteCard: 'Usuń kartę',
      deleteCardForever: 'Usuń kartę permanetnie',
      deleteCard_title: 'Usuń Kartę',
      deleteComment: 'Usuń komentarz',
      deleteCustomField: 'Usuń pole własne',
      deleteCustomFieldGroup: 'Usuń grupę pól własnych',
      deleteForever_title: 'Usuń Permanentnie',
      deleteGroup: 'Usuń groupę',
      deleteLabel: 'Usuń oznaczenie',
      deleteList: 'Usuń listę',
      deleteList_title: 'Usuń Listę',
      deleteNotificationService: 'Usuń serwis powiadomień',
      deleteProject: 'Usuń projekt',
      deleteProject_title: 'Usuń Projekt',
      deleteTask: 'Usuń zadanie',
      deleteTaskList: 'Usuń listę zadań',
      deleteTask_title: 'Usuń Zadanie',
      deleteUser: 'Usuń użytkownika',
      deleteUser_title: 'Usuń Użytkownika',
      dismissAll: 'Odrzuć wszystkie',
      duplicateCard_title: 'Duplikuj Kartę',
      edit: 'Edytuj',
      editColor_title: 'Edytuj Kolor',
      editDescription_title: 'Edytuj Opis',
      editDueDate_title: 'Edytuj Termin',
      editEmail_title: 'Edytuj E-mail',
      editGroup: 'Edytuj groupę',
      editInformation_title: 'Edytuj Informacje',
      editPassword_title: 'Edytuj Hasło',
      editPermissions: 'Edytuj uprawnienia',
      editRole_title: 'Edytuj Rolę',
      editStopwatch_title: 'Edytuj Stoper',
      editTitle_title: 'Edytuj Tytuł',
      editType_title: 'Edytuj Typ',
      editUsername_title: 'Edytuj Nazwę Użytkownika',
      emptyTrash: 'Opróżnij kosz',
      emptyTrash_title: 'Opróżnij Kosz',
      import: 'Importuj',
      join: 'Dołącz',
      leave: 'Opuść',
      leaveBoard: 'Opuść tablicę',
      leaveProject: 'Opuść projekt',
      logOut_title: 'Wyloguj',
      makeCover_title: 'Stwórz Okładkę',
      makeProjectShared: 'Udostępnij projekt',
      makeProjectShared_title: 'Udostępnij Projekt',
      move: 'Przenieś',
      moveCard_title: 'Przenieś Kartę',
      remove: 'Usuń',
      removeAssignee: 'Usuń osobę przypisaną',
      removeColor: 'Usuń kolor',
      removeCover_title: 'Usuń Okładkę',
      removeFromBoard: 'Usuń z tablicy',
      removeFromProject: 'Usuń z projektu',
      removeManager: 'Usuń zarządcę',
      removeMember: 'Usuń członka',
      restoreToList: 'Przywróć na {{list}}',
      returnToBoard: 'Przywróć do tablicy',
      save: 'Zapisz',
      showActive: 'Pokaż aktywne',
      showAllAttachments: 'Pokaż wszystkie załączniki ({{hidden}} są ukryte)',
      showCardsWithThisUser: 'Pokaż karty z tym użytkownikiem',
      showDeactivated: 'Pokaż dezaktywowane',
      showFewerAttachments: 'Pokaż mniej załączników',
      sortList_title: 'Sortuj Listę',
      start: 'Start',
      stop: 'Stop',
      subscribe: 'Subskrybuj',
      unsubscribe: 'Odsubskrybuj',
      uploadNewAvatar: 'Wgraj nowy awatar',
      uploadNewImage: 'Wgraj nowy obraz',
    },
  },
};
