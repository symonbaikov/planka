import dateFns from 'date-fns/locale/it';
import timeAgo from 'javascript-time-ago/locale/it';

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
    longDateTime: "d MMMM 'alle' p",
    fullDate: 'd MMM, y',
    fullDateTime: "d MMMM, y 'alle' p",
  },

  translation: {
    common: {
      aboutPlanka: 'Informazioni su PLANKA',
      accessToken: 'Token di accesso',
      account: 'Account',
      actions: 'Azioni',
      activateUser_title: 'Attiva utente',
      active: 'Attivo',
      addAttachment_title: 'Aggiungi allegato',
      addCustomFieldGroup_title: 'Aggiungi campi personalizzati',
      addCustomField_title: 'Aggiungi campo personalizzato',
      addManager_title: 'Aggiungi manager',
      addMember_title: 'Aggiungi membro',
      addTaskList_title: 'Aggiungi lista di task',
      addUser_title: 'Aggiungi utente',
      admin: 'Amministratore',
      administration: 'Amministrazione',
      all: 'tutto',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Tutte le modifiche verranno salvate<br />al ripristino della connessione.',
      alphabetically: 'In ordine alfabetico',
      alwaysDisplayCardCreator: 'Mostra sempre il creatore della scheda',
      archive: 'Archivia',
      archiveCard_title: 'Archivia scheda',
      archiveCards_title: 'Archivia schede',
      areYouSureYouWantToActivateThisUser: 'Sei sicuro di voler attivare questo utente?',
      areYouSureYouWantToArchiveCards: 'Sei sicuro di voler archiviare le schede?',
      areYouSureYouWantToArchiveThisCard: 'Sei sicuro di voler archiviare questa scheda?',
      areYouSureYouWantToAssignThisProjectManagerAsOwner:
        'Sei sicuro di voler assegnare questo project manager come proprietario?',
      areYouSureYouWantToDeactivateThisUser: 'Sei sicuro di voler disattivare questo utente?',
      areYouSureYouWantToDeleteThisAttachment: 'Sei sicuro di voler eliminare questo allegato?',
      areYouSureYouWantToDeleteThisBackgroundImage:
        'Sei sicuro di voler eliminare questa immagine di sfondo?',
      areYouSureYouWantToDeleteThisBoard: 'Sei sicuro di voler eliminare questa bacheca?',
      areYouSureYouWantToDeleteThisCard: 'Sei sicuro di voler eliminare questa scheda?',
      areYouSureYouWantToDeleteThisCardForever:
        'Sei sicuro di voler eliminare questa scheda per sempre?',
      areYouSureYouWantToDeleteThisComment: 'Sei sicuro di voler eliminare questo commento?',
      areYouSureYouWantToDeleteThisCustomField:
        'Sei sicuro di voler eliminare questo campo personalizzato?',
      areYouSureYouWantToDeleteThisCustomFieldGroup:
        'Sei sicuro di voler eliminare questo campi personalizzati?',
      areYouSureYouWantToDeleteThisLabel: 'Sei sicuro di voler eliminare questa etichetta?',
      areYouSureYouWantToDeleteThisList:
        'Sei sicuro di voler eliminare questa lista? Tutte le schede verranno spostate nel cestino.',
      areYouSureYouWantToDeleteThisNotificationService:
        'Sei sicuro di voler eliminare questo servizio di notifica?',
      areYouSureYouWantToDeleteThisProject: 'Sei sicuro di voler eliminare questo progetto?',
      areYouSureYouWantToDeleteThisTask: 'Sei sicuro di voler eliminare questo task?',
      areYouSureYouWantToDeleteThisTaskList: 'Sei sicuro di voler eliminare questa lista di task?',
      areYouSureYouWantToDeleteThisUser: 'Sei sicuro di voler eliminare questo utente?',
      areYouSureYouWantToDeleteThisWebhook: 'Sei sicuro di voler eliminare questo webhook?',
      areYouSureYouWantToEmptyTrash: 'Sei sicuro di voler svuotare il cestino?',
      areYouSureYouWantToLeaveBoard: 'Sei sicuro di voler abbandonare la bacheca?',
      areYouSureYouWantToLeaveProject: 'Sei sicuro di voler abbandonare il progetto?',
      areYouSureYouWantToMakeThisProjectPrivate:
        'Sei sicuro di voler rendere questo progetto privato?',
      areYouSureYouWantToMakeThisProjectShared:
        'Sei sicuro di voler rendere questo progetto condiviso?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Sei sicuro di voler rimuovere questo amministratore dal progetto?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Sei sicuro di voler rimuovere questo membro dalla bacheca?',
      assignAsOwner_title: 'Assegna come proprietario',
      atLeastOneListMustBePresent: 'Deve essere presente almeno una lista',
      attachment: 'Allegato',
      attachments: 'Allegati',
      authentication: 'Autenticazione',
      background: 'Sfondo',
      baseCustomFields_title: 'Campi personalizzati base',
      baseGroup: 'Gruppo base',
      board: 'Bacheca',
      boardActions_title: 'Azioni bacheca',
      boardNotFound_title: 'Bacheca non trovata',
      boardSubscribed: 'Iscritto alla bacheca',
      boardUser: 'Utente della bacheca',
      byCreationTime: 'Per data di creazione',
      byDefault: 'Per impostazione predefinita',
      byDueDate: 'Per data di scadenza',
      canBeInvitedToWorkInBoards: 'Può essere invitato a lavorare in bacheche.',
      canComment: 'Può commentare',
      canCreateOwnProjectsAndBeInvitedToWorkInOthers:
        'Può creare i propri progetti ed essere invitato a lavorare in altri.',
      canEditBoardLayoutAndAssignMembersToCards:
        'Può modificare il layout della bacheca e assegnare membri alle schede.',
      canManageSystemWideSettingsAndActAsProjectOwner:
        'Può gestire le impostazioni di sistema e agire come proprietario del progetto.',
      canOnlyViewBoard: 'Può solo visualizzare la bacheca.',
      cardActions_title: 'Azioni scheda',
      cardNotFound_title: 'Scheda non trovata',
      cardsOnThisListAreAvailableToAllBoardMembers:
        'Le schede in questa lista sono disponibili per tutti i membri della bacheca.',
      cardsOnThisListAreCompleteAndReadyToBeArchived:
        'Le schede in questa lista sono complete e pronte per essere archiviate.',
      cardsOnThisListAreReadyToBeWorkedOn:
        'Le schede in questa lista sono pronte per essere lavorate.',
      clickHereOrRefreshPageToUpdate: '<0>Clicca qui</0> o ricarica la pagina per aggiornare.',
      closed: 'Chiuso',
      color: 'Colore',
      comments: 'Commenti',
      contentExceedsLimit: 'Il contenuto supera {{limit}}',
      copy_inline: 'copia',
      createBoard_title: 'Crea bacheca',
      createCustomFieldGroup_title: 'Crea campi personalizzati',
      createLabel_title: 'Crea etichetta',
      createNewOneOrSelectExistingOne: 'Crea nuovo o seleziona uno<br />esistente.',
      createProject_title: 'Crea progetto',
      createTextFile_title: 'Crea file di testo',
      creator: 'Creatore',
      currentPassword: 'Password attuale',
      customFieldGroup_title: 'campi personalizzati',
      customFieldGroups_title: 'Campi personalizzati',
      customField_title: 'Campo personalizzato',
      customFields_title: 'Campi personalizzati',
      dangerZone_title: 'Zona pericolosa',
      date: 'Data',
      deactivateUser_title: 'Disattiva utente',
      defaultCardType_title: 'Tipo di scheda predefinito',
      defaultView_title: 'Vista predefinita',
      deleteAllBoardsToBeAbleToDeleteThisProject:
        'Elimina tutte le bacheche per poter eliminare questo progetto.',
      deleteAttachment_title: 'Elimina allegato',
      deleteBackgroundImage_title: 'Elimina immagine di sfondo',
      deleteBoard_title: 'Elimina bacheca',
      deleteCardForever_title: 'Elimina scheda per sempre',
      deleteCard_title: 'Elimina scheda',
      deleteComment_title: 'Elimina commento',
      deleteCustomFieldGroup_title: 'Elimina campi personalizzati',
      deleteCustomField_title: 'Elimina campo personalizzato',
      deleteLabel_title: 'Elimina etichetta',
      deleteList_title: 'Elimina elenco',
      deleteNotificationService_title: 'Elimina servizio di notifica',
      deleteProject_title: 'Elimina progetto',
      deleteTaskList_title: 'Elimina lista di task',
      deleteTask_title: 'Elimina task',
      deleteUser_title: 'Elimina utente',
      deletedUser_title: 'Utente eliminato',
      deleteWebhook_title: 'Elimina webhook',
      description: 'Descrizione',
      detectAutomatically: 'Rileva automaticamente',
      display: 'Mostra',
      dropFileToUpload: 'Trascina il file da caricare',
      dueDate_title: 'Data di scadenza',
      dynamicAndUnevenlySpacedLayout: 'Layout dinamico e irregolarmente distribuito',
      editAttachment_title: 'Modifica allegato',
      editAvatar_title: 'Modifica avatar',
      editColor_title: 'Modifica colore',
      editCustomFieldGroup_title: 'Modifica campi personalizzati',
      editCustomField_title: 'Modifica campo personalizzato',
      editDueDate_title: 'Modifica data di scadenza',
      editEmail_title: 'Modifica indirizzo e-mail',
      editInformation_title: 'Modifica informazioni',
      editLabel_title: 'Modifica etichetta',
      editPassword_title: 'Modifica password',
      editPermissions_title: 'Modifica permessi',
      editRole_title: 'Modifica ruolo',
      editStopwatch_title: 'Modifica timer',
      editType_title: 'Modifica tipo',
      editUsername_title: 'Modifica username',
      editor: 'Editor',
      editors: 'Editors',
      email: 'E-mail',
      emptyTrash_title: 'Svuota cestino',
      enterCardTitle: 'Inserire titolo della scheda...',
      enterDescription: 'Inserire descrizione...',
      enterFilename: 'Inserire nome del file',
      enterListTitle: 'Inserire titolo della lista...',
      enterTaskDescription: 'Inserire descrizione della task...',
      events: 'Eventi',
      excludedEvents: 'Eventi esclusi',
      filterByLabels_title: 'Filtra per etichetta',
      filterByMembers_title: 'Filtra per membro',
      forPersonalProjects: 'Per progetti personali',
      forTeamBasedProjects: 'Per progetti di gruppo',
      fromComputer_title: 'Dal Computer',
      fromTrello: 'Da Trello',
      general: 'Generale',
      gradients: 'Gradiente',
      grid: 'Griglia',
      hideCompletedTasks: 'Nascondi task completate',
      hideFromProjectListAndFavorites: 'Nascondi dalla lista dei progetti e dai preferiti',
      hours: 'Ore',
      importBoard_title: 'Importa board',
      invalidCurrentPassword: 'Password corrente non valida',
      kanban: 'Kanban',
      labels: 'Etichette',
      language: 'Lingua',
      leaveBoard_title: 'Abbandona bacheca',
      leaveProject_title: 'Abbandona progetto',
      limitCardTypesToDefaultOne: 'Limita i tipi di scheda a quello predefinito',
      linkToCard: 'Collega alla scheda',
      list: 'Lista',
      listActions_title: 'Azioni lista',
      lists: 'Liste',
      makeProjectPrivate_title: 'Rendi progetto privato',
      makeProjectShared_title: 'Rendi progetto condiviso',
      managers: 'Managers',
      memberActions_title: 'Azioni membro',
      members: 'Membri',
      minutes: 'Minuti',
      moreActions: 'Altre azioni',
      moreActions_title: 'Altre azioni',
      moveCard_title: 'Sposta scheda',
      myOwn_title: 'Personali',
      name: 'Nome',
      newEmail: 'Nuova e-mail',
      newPassword: 'Nuova password',
      newUsername: 'Nuovo username',
      newVersionAvailable: 'Nuova versione disponibile',
      newestFirst: 'Dal più recente',
      noBoards: 'Nessuna bacheca',
      noCardsFound: 'Nessuna scheda trovata',
      noConnectionToServer: 'Nessuna connessione al server',
      noLists: 'Nessuna lista',
      noProjects: 'Nessun progetto',
      noUnreadNotifications: 'Nessuna notifica da leggere.',
      notifications: 'Notifiche',
      oldestFirst: 'Dal meno recente',
      onlyOneManagerShouldRemainToMakeThisProjectPrivate:
        'Deve rimanere solo un manager per rendere questo progetto privato',
      openBoard_title: 'Bacheca aperta',
      optional_inline: 'opzionale',
      organization: 'Organizazzione',
      others: 'Altri',
      phone: 'Telefono',
      plankaUsesAppriseToSendNotificationsToOver100PopularServices:
        'PLANKA utilizza <1><0>Apprise</0></1> per inviare notifiche a oltre 100 servizi popolari.',
      preferences: 'Preferenze',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Consiglio: premi Ctrl-V (Cmd-V on Mac) per aggiungere un allegato dalla clipboard.',
      private: 'Privato',
      project: 'Progetto',
      projectNotFound_title: 'Progetto non trovato',
      projectOwner: 'Proprietario del progetto',
      referenceDataAndKnowledgeStorage: 'Dati di riferimento e di archiviazione',
      removeManager_title: 'Rimuovi manager',
      removeMember_title: 'Rimuovi membro',
      role: 'Ruolo',
      searchCards: 'Cerca schede...',
      searchCustomFieldGroups: 'Cerca campi personalizzati...',
      searchCustomFields: 'Cerca campi personalizzati...',
      searchLabels: 'Cerca etichette...',
      searchLists: 'Cerca liste...',
      searchMembers: 'Cerca membri...',
      searchProjects: 'Cerca progetti...',
      searchUsers: 'Cerca utenti...',
      seconds: 'Secondi',
      selectAssignee_title: 'Seleziona assegnatario',
      selectBoard: 'Seleziona bacheca',
      selectList: 'Seleziona lista',
      selectListToRestoreThisCard: 'Seleziona lista per ripristinare questa scheda',
      selectOrder_title: 'Seleziona ordine',
      selectPermissions_title: 'Seleziona permessi',
      selectProject: 'Seleziona progetto',
      selectRole_title: 'Seleziona ruolo',
      selectType_title: 'Seleziona tipo',
      sequentialDisplayOfCards: 'Visualizzazione sequenziale delle schede',
      settings: 'Impostazioni',
      shared: 'Condiviso',
      sharedWithMe_title: 'Condiviso con me',
      showOnFrontOfCard: 'Mostra davanti alla scheda',
      sortList_title: 'Ordina',
      stopwatch: 'Timer',
      story: 'Storia',
      subscribeToCardWhenCommenting: 'Iscrivimi alla scheda quando commento',
      subscribeToMyOwnCardsByDefault: 'Abbonati alle mie scheda per impostazione predefinita',
      taskActions_title: 'Azioni task',
      taskAssignmentAndProjectCompletion: 'Assegnazione di task e completamento del progetto',
      taskListActions_title: 'Azioni lista di task',
      taskList_title: 'Lista di task',
      team: 'Team',
      thereIsNoPreviewAvailableForThisAttachment:
        'Non è disponibile alcuna anteprima per questo allegato.',
      time: 'Tempo',
      title: 'Titolo',
      trash: 'Cestino',
      trashHasBeenSuccessfullyEmptied: 'Il cestino è stato svuotato con successo.',
      turnOffRecentCardHighlighting: "Disattiva l'evidenziazione delle scheda recenti",
      typeNameToConfirm: 'Digita il nome per confermare',
      typeTitleToConfirm: 'Digita il titolo per confermare',
      unsavedChanges: 'Modifiche non salvate',
      uploadedImages: 'Immagini caricate',
      url: 'URL',
      userActions_title: 'Azioni utente',
      userAddedCardToList: '<0>{{user}}</0> ha aggiunto <2>{{card}}</2> a {{list}}',
      userAddedThisCardToList: '<0>{{user}}</0> ha aggiunto questa task a {{list}}',
      userAddedUserToCard: '<0>{{actorUser}}</0> ha aggiunto {{addedUser}} a <4>{{card}}</4>',
      userAddedUserToThisCard: '<0>{{actorUser}}</0> ha aggiunto {{addedUser}} a questa task',
      userAddedYouToCard: '<0>{{user}}</0> ti ha aggiunto a <2>{{card}}</2>',
      userCompletedTaskOnCard: '<0>{{user}}</0> ha completato {{task}} in <4>{{card}}</4>',
      userCompletedTaskOnThisCard: '<0>{{user}}</0> ha completato {{task}} in questa task',
      userJoinedCard: '<0>{{user}}</0> è entrato in <2>{{card}}</2>',
      userJoinedThisCard: '<0>{{user}}</0> è entrato in questa task',
      userLeftCard: '<0>{{user}}</0> ha lasciato <2>{{card}}</2>',
      userLeftNewCommentToCard:
        '<0>{{user}}</0> ha lasciato un commento «{{comment}}» a <2>{{card}}</2>',
      userLeftThisCard: '<0>{{user}}</0> ha lasciato questa task',
      userMarkedTaskIncompleteOnCard:
        '<0>{{user}}</0> ha contrassegnato {{task}} come incompleta in <4>{{card}}</4>',
      userMarkedTaskIncompleteOnThisCard:
        '<0>{{user}}</0> ha contrassegnato {{task}} come incompleta in questa task',
      userMovedCardFromListToList:
        '<0>{{user}}</0> ha spostato <2>{{card}}</2> da {{fromList}} a {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0> ha spostato questa scheda da {{fromList}} a {{toList}}',
      userRemovedUserFromCard: '<0>{{actorUser}}</0> ha rimosso {{removedUser}} da <4>{{card}}</4>',
      userRemovedUserFromThisCard: '<0>{{actorUser}}</0> ha rimosso {{removedUser}} da questa task',
      username: 'Username',
      users: 'Utenti',
      webhooks: 'Webhooks',
      viewer: 'Visualizzatore',
      viewers: 'Visualizzatori',
      visualTaskManagementWithLists: 'Gestione visiva dei task con liste',
      withoutBaseGroup: 'Senza gruppo base',
      writeComment: 'Scrivi un commento...',
    },

    action: {
      activateUser: 'Attiva utente',
      activateUser_title: 'Attiva utente',
      addAnotherCard: "Aggiungi un'altra scheda",
      addAnotherList: "Aggiungi un'altra lista",
      addAnotherTask: 'Aggiungi un altro task',
      addCard: 'Aggiungi scheda',
      addCard_title: 'Aggiungi scheda',
      addComment: 'Aggiungi commento',
      addCustomField: 'Aggiungi campo personalizzato',
      addCustomFieldGroup: 'Aggiungi campi personalizzati',
      addList: 'Aggiungi lista',
      addMember: 'Aggiungi membro',
      addMoreDetailedDescription: 'Aggiungi una descrizione più dettagliata',
      addTask: 'Aggiungi task',
      addTaskList: 'Aggiungi lista di task',
      addToCard: 'Aggiungi alla scheda',
      addUser: 'Aggiungi utente',
      addWebhook: 'Aggiungi webhook',
      archive: 'Archivia',
      archiveCard: 'Archivia scheda',
      archiveCard_title: 'Archivia scheda',
      archiveCards: 'Archivia schede',
      archiveCards_title: 'Archivia schede',
      assignAsOwner: 'Assegna come proprietario',
      cancel: 'Annulla',
      createBoard: 'Crea bacheca',
      createCustomFieldGroup: 'Crea campi personalizzati',
      createFile: 'Crea file',
      createLabel: 'Crea etichetta',
      createNewLabel: 'Crea nuova etichetta',
      createProject: 'Crea progetto',
      deactivateUser: 'Disattiva utente',
      delete: 'Elimina',
      deleteAttachment: 'Elimina allegato',
      deleteAvatar: 'Elimina avatar',
      deleteBackgroundImage: 'Elimina immagine di sfondo',
      deleteBoard: 'Elimina bacheca',
      deleteBoard_title: 'Elimina bacheca',
      deleteCard: 'Elimina scheda',
      deleteCardForever: 'Elimina scheda per sempre',
      deleteCard_title: 'Elimina scheda',
      deleteComment: 'Elimina commento',
      deleteCustomField: 'Elimina campo personalizzato',
      deleteCustomFieldGroup: 'Elimina campi personalizzati',
      deleteForever_title: 'Elimina per sempre',
      deleteGroup: 'Elimina gruppo',
      deleteLabel: 'Elimina etichetta',
      deleteList: 'Elimina lista',
      deleteList_title: 'Elimina lista',
      deleteNotificationService: 'Elimina servizio di notifica',
      deleteProject: 'Elimina progetto',
      deleteProject_title: 'Elimina progetto',
      deleteTask: 'Elimina task',
      deleteTaskList: 'Elimina lista di list',
      deleteTask_title: 'Elimina task',
      deleteUser: 'Elimina utente',
      deleteUser_title: 'Elimina utente',
      deleteWebhook: 'Elimina webhook',
      dismissAll: 'Ignora tutto',
      duplicateCard_title: 'Duplica scheda',
      edit: 'Modifica',
      editColor_title: 'Modifica colore',
      editDescription_title: 'Modifica descrizione',
      editDueDate_title: 'Modifica data di scadenza',
      editEmail_title: 'Modifica indirizzo e-mail',
      editGroup: 'Modifica gruppo',
      editInformation_title: 'Modifca informazioni',
      editPassword_title: 'Modifica password',
      editPermissions: 'Modifica permessi',
      editRole_title: 'Modifica ruolo',
      editStopwatch_title: 'Modifica timer',
      editTitle_title: 'Modifica titolo',
      editType_title: 'Modifica tipo',
      editUsername_title: 'Modifica username',
      emptyTrash: 'Svuota cestino',
      emptyTrash_title: 'Svuota cestino',
      import: 'Importa',
      join: 'Entra',
      leave: 'Abbandona',
      leaveBoard: 'Abbandona bacheca',
      leaveProject: 'Abbandona progetto',
      logOut_title: 'Disconnettiti',
      makeCover_title: 'Crea cover',
      makeProjectPrivate: 'Rendi progetto privato',
      makeProjectPrivate_title: 'Rendi progetto privato',
      makeProjectShared: 'Rendi progetto condiviso',
      makeProjectShared_title: 'Rendi progetto condiviso',
      move: 'Muovi',
      moveCard_title: 'Muovi scheda',
      remove: 'Rimuovi',
      removeAssignee: 'Rimuovi assegnatario',
      removeColor: 'Remove colore',
      removeCover_title: 'Rimuovi copertina',
      removeFromBoard: 'Rimuovi dalla bacheca',
      removeFromProject: 'Rimuovi dal progetto',
      removeManager: 'Rimuovi manager',
      removeMember: 'Rimuovi membro',
      restoreToList: 'Ripristina a {{list}}',
      returnToBoard: 'Torna alla bacheca',
      save: 'Salva',
      showActive: 'Mostra attivi',
      showAllAttachments: 'Mostra tutti gli allegati ({{hidden}} nascosti)',
      showCardsWithThisUser: 'Mostra schede con questo utente',
      showDeactivated: 'Mostra disattivati',
      showFewerAttachments: 'Mostra meno allegati',
      showLess: 'Mostra di meno',
      showMore: 'Mostra di più',
      sortList_title: 'Ordina',
      start: 'Inizio',
      stop: 'Interrompi',
      subscribe: 'Iscriviti',
      unsubscribe: 'Annulla iscrizione',
      uploadNewAvatar: 'Carica nuovo avatar',
      uploadNewImage: 'Carica nuova immagine',
    },
  },
};
