Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"test model","publishDate":"03.05.2018 10:34:35","pages":[{"id":"7f5dc9f3-c938-4ae4-b63c-46e2ca93a90a","name":"Диаграмма 1","mainProcessId":"88403de9-4854-4c19-b1f0-403f4a8d4836","version":"1.0","author":"dimo4ello","image":"files\\diagrams\\Диаграмма_1.png","isSubprocessPage":false,"elements":[{"id":"88403de9-4854-4c19-b1f0-403f4a8d4836","name":"Основной процесс","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":50.0,"y":50.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"c1683aae-60b5-4075-a546-4bb989cfc55f","name":"Приказ о командировке","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":60.0,"y":385.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart"},{"id":"f529a32d-7304-4105-8657-9567770dbd9d","name":"Параллельный шлюз","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":200.0,"y":380.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"802e3cec-11c2-4f54-b5e2-3943fab9c55d","name":"Дата  возвращения + 3 дня","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":260.0,"y":245.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"d38c50cc-3e7b-4fed-a9b9-7a851361a31f","name":"Проконтролировать  наличие отчета","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":400.0,"y":230.0}],"radius":0.0,"height":60.0,"width":130.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"243f4d94-6087-4d39-ab5d-587035a140b3","name":"Эксклюзивный шлюз","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":600.0,"y":240.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"нет отчета","elementType":"SequenceFlow","properties":[]},{"name":"есть отчет","elementType":"SequenceFlow","properties":[]}]},{"id":"c8c49739-af58-4666-80ef-95ce35254ea4","name":"кол-во попыток исчерпано? ","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":600.0,"y":140.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"нет","elementType":"SequenceFlow","properties":[]},{"name":"да","elementType":"SequenceFlow","properties":[]}]},{"id":"e299e3ab-d3ce-44a8-816d-39b3fe4c83cf","name":"напомнить о оформлении отчета","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":555.0,"y":20.0}],"radius":0.0,"height":60.0,"width":130.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"91311b4a-2893-4ee2-8466-4d56b964ccd6","name":"Окончание ошибки","elementImage":"files\\bpmnElements\\ErrorEnd.png","imageBounds":{"points":[{"x":836.0,"y":60.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ErrorEnd","properties":[{"id":"ErrorCode","name":"Код ошибки","type":"text"}]},{"id":"3ae0fe06-e745-4f67-8dd8-8f59fdfdece6","name":"Рассчитать сумму командировочных","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":145.0,"y":480.0}],"radius":0.0,"height":60.0,"width":150.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ebafc9ca-bf4b-4d53-a77d-e097f4753bc3","name":"Выдать аванс","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":440.0,"y":480.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a785f27c-fac4-4928-ba58-11d29929c446","name":"Оформить документы","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":380.0,"y":370.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4ecfce30-dac2-4faa-9698-b462e3c5dbdc","name":"Параллельный шлюз","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":560.0,"y":380.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f0739557-22b1-4b28-85cb-86db4622093d","name":"Оформить авансовый отчет","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":620.0,"y":370.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5c4c8194-dcb0-4568-983d-81d8b31f883f","name":"Провести рассчеты с сотрудником","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":740.0,"y":370.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"32195190-d50e-4209-9395-d77d3c6d500c","name":"Нет завершения","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":840.0,"y":300.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"}]}]}],"texts":{"tableOfContents":"Содержание","pageNumber":"Страница","pageNumberLabelOf":"из","version":"Версия","author":"Автор","description":"Описание","mainPool":"Основной процесс","mainPoolDescription":"Основной процесс Описание","processDiagrams":"Диаграммы процесса","processElements":"Элементы процесса","elements":"Элементы процесса","defaultElementName":"Элемент","performers":"Исполнители","accountable":"Accountable","consulted":"Consulted","informed":"Informed","connectors":"Коннекторы","connector":"Коннектор","home":"Главная","search":"Поиск","goToParentProcess":"<< Перейти к родительскому процессу","visitBizagi":"Посетите bizagi.com","contains":"Содержит {0} подпроцессов","showAll":"Show all","fullScreen":"Во весь экран","zoomIn":"Увеличить","zoomOut":"Уменьшить","close":"Закрыть","menu":"Меню: ","errorPage":"Ошибка отображения страницы","process":"Процесс","subProcess":"Опубликовано подпроцессами","contain":"Содержит","checkAttributes":"Проверка атрибутов","checkOverview":"Проверка просмотра","unavailableResource":"Ресурс недоступен","localResource":"Ресурс доступен локально","performer":"Исполнитель","linktoimage":"Ссылка на изображение","presentationAction":"Действия презентации","searchGlobal":"Искать везде","searchLocal":"Искать в этом процессе","searchResults":"Результаты не найдены","titlePage":"Start","emptyElement":"Этот элемент еще не документирован","unsupported":"Ваш браузер не поддерживает содержимого, отображаемого этой странице. <br> Мы рекомендуем Вам об обновлении Вашего браузера.","details":"детали","expand":"Развернуть","mainPoolProperties":"Свойства основного процесса","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"7f5dc9f3-c938-4ae4-b63c-46e2ca93a90a","containerName":"Диаграмма 1","isSubprocess":false,"elements":[{"id":"c1683aae-60b5-4075-a546-4bb989cfc55f","value":"Приказ о командировке"},{"id":"f529a32d-7304-4105-8657-9567770dbd9d","value":""},{"id":"a785f27c-fac4-4928-ba58-11d29929c446","value":"Оформить документы"},{"id":"3ae0fe06-e745-4f67-8dd8-8f59fdfdece6","value":"Рассчитать сумму командировочных"},{"id":"ebafc9ca-bf4b-4d53-a77d-e097f4753bc3","value":"Выдать аванс"},{"id":"4ecfce30-dac2-4faa-9698-b462e3c5dbdc","value":""},{"id":"f0739557-22b1-4b28-85cb-86db4622093d","value":"Оформить авансовый отчет"},{"id":"802e3cec-11c2-4f54-b5e2-3943fab9c55d","value":"Дата  возвращения + 3 дня"},{"id":"d38c50cc-3e7b-4fed-a9b9-7a851361a31f","value":"Проконтролировать  наличие отчета"},{"id":"243f4d94-6087-4d39-ab5d-587035a140b3","value":""},{"id":"32195190-d50e-4209-9395-d77d3c6d500c","value":""},{"id":"5c4c8194-dcb0-4568-983d-81d8b31f883f","value":"Провести рассчеты с сотрудником"},{"id":"e299e3ab-d3ce-44a8-816d-39b3fe4c83cf","value":"напомнить о оформлении отчета"},{"id":"c8c49739-af58-4666-80ef-95ce35254ea4","value":"кол-во попыток исчерпано? "},{"id":"91311b4a-2893-4ee2-8466-4d56b964ccd6","value":""}]}]}