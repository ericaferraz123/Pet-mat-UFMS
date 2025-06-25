document.addEventListener('DOMContentLoaded', () => {
    const inventoryData = [
        {
            id: "MD001",
            name: "Conjunto de Sólidos Geométricos (Madeira)",
            description: "Um conjunto completo de modelos de sólidos geométricos, incluindo cubo, esfera, cone, pirâmide, cilindro e mais, ideal para visualização 3D e estudos de geometria espacial.",
            quantity: 5,
            status: "Disponível",
            location: "Armário de Materiais Didáticos",
            type: "Material Didático",
            catalogueCode: "GEO-SET-001",
            imageUrl: "https://picsum.photos/id/20/600/400"
        },
        {
            id: "MD002",
            name: "Kit de Materiais para Cálculo (Plástico)",
            description: "Kit com diversos modelos em plástico para auxiliar no entendimento de cálculo, incluindo gráficos 3D de funções, superfícies de revolução, discos e anéis para demonstrações de volume e integrais.",
            quantity: 3,
            status: "Disponível",
            location: "Armário de Materiais Didáticos",
            type: "Material Didático",
            catalogueCode: "CALC-KIT-002",
            imageUrl: "https://picsum.photos/id/29/600/400"
        },
        {
            id: "MD003",
            name: "Livro: 'Cálculo I' (James Stewart)",
            description: "Edição 8 do renomado livro 'Cálculo I' de James Stewart. Possui vários exemplares disponíveis para consulta local no laboratório, sendo um recurso fundamental para estudantes de cálculo.",
            quantity: 15,
            status: "Disponível (para consulta no local)",
            location: "Estante de Livros Didáticos",
            type: "Material Didático",
            catalogueCode: "LIV-CALC-JS-003",
            imageUrl: "https://picsum.photos/id/200/600/400"
        },
        {
            id: "MD004",
            name: "Jogo 'Dominó da Matemática'",
            description: "Jogo didático tipo dominó, desenvolvido para reforçar conceitos matemáticos para alunos do ensino fundamental e médio. Aborda temas variados como frações, operações básicas e álgebra.",
            quantity: 2,
            status: "Disponível",
            location: "Armário de Jogos Educativos",
            type: "Material Didático",
            catalogueCode: "JOG-MAT-004",
            imageUrl: "https://picsum.photos/id/210/600/400"
        },
        {
            id: "MD005",
            name: "Ábaco Gigante (Madeira)",
            description: "Um ábaco de grandes dimensões, feito de madeira, ideal para demonstrações visuais em aulas de aritmética, ajudando na compreensão de contagem, adição e subtração.",
            quantity: 1,
            status: "Disponível",
            location: "Sala de Demonstrações",
            type: "Material Didático",
            catalogueCode: "ABA-GIG-005",
            imageUrl: "https://picsum.photos/id/220/600/400"
        },
        {
            id: "MOB001",
            name: "Mesa de Estudo Individual",
            description: "Mesa padrão UFMS, equipada com uma gaveta e espaço otimizado para acomodar um computador. Ideal para sessões de estudo individuais e trabalhos concentrados.",
            quantity: 10,
            status: "Disponível",
            location: "Sala 101 - Estações de Trabalho",
            type: "Mobiliário",
            catalogueCode: "MOB-MES-001",
            imageUrl: "https://picsum.photos/id/30/600/400"
        },
        {
            id: "MOB002",
            name: "Cadeira Ergonômica",
            description: "Cadeira giratória com múltiplos ajustes, incluindo altura e apoio lombar, projetada para proporcionar conforto e suporte ergonômico durante longos períodos de estudo ou trabalho.",
            quantity: 10,
            status: "Disponível",
            location: "Sala 101 - Estações de Trabalho",
            type: "Mobiliário",
            catalogueCode: "MOB-CAD-002",
            imageUrl: "https://picsum.photos/id/40/600/400"
        },
        {
            id: "MOB003",
            name: "Armário com Chave (4 portas)",
            description: "Armário de metal robusto com quatro portas, todas equipadas com chave, ideal para guardar materiais didáticos, documentos e equipamentos de forma segura e organizada.",
            quantity: 2,
            status: "Disponível",
            location: "Sala 101",
            type: "Mobiliário",
            catalogueCode: "MOB-ARM-003",
            imageUrl: "https://picsum.photos/id/50/600/400"
        },
        {
            id: "MOB004",
            name: "Mesa de Reunião (Oval)",
            description: "Mesa grande de formato oval, perfeita para reuniões de grupo, discussões de projetos e atividades colaborativas, oferecendo amplo espaço para todos os participantes.",
            quantity: 1,
            status: "Disponível",
            location: "Sala 102 - Sala de Reuniões",
            type: "Mobiliário",
            catalogueCode: "MOB-REU-004",
            imageUrl: "https://picsum.photos/id/60/600/400"
        },
        {
            id: "OUT001",
            name: "Quadro Branco Interativo (Smart Board)",
            description: "Quadro branco interativo de última geração (Smart Board), com funcionalidade de projeção e sensibilidade ao toque. Possui conexão HDMI para integração com outros dispositivos, facilitando apresentações e aulas dinâmicas.",
            quantity: 1,
            status: "Disponível",
            location: "Sala 102 - Sala de Reuniões",
            type: "Outros",
            catalogueCode: "OUT-QBI-001",
            imageUrl: "https://picsum.photos/id/70/600/400"
        },
        {
            id: "OUT002",
            name: "Kit de Primeiros Socorros Completo",
            description: "Kit abrangente para uso em emergências leves e médias, contendo itens básicos de curativo, antissépticos, analgésicos e outros suprimentos essenciais para primeiros socorros.",
            quantity: 1,
            status: "Disponível",
            location: "Área de Apoio - Recepção",
            type: "Outros",
            catalogueCode: "OUT-PS-002",
            imageUrl: "https://picsum.photos/id/80/600/400"
        },
        {
            id: "OUT003",
            name: "Extintor de Incêndio (CO2)",
            description: "Extintor de incêndio à base de CO2, adequado para combater incêndios de classe B (líquidos inflamáveis) e C (equipamentos elétricos energizados), crucial para a segurança do laboratório.",
            quantity: 2,
            status: "Disponível",
            location: "Corredor e Sala 101",
            type: "Outros",
            catalogueCode: "OUT-EXT-003",
            imageUrl: "https://picsum.photos/id/90/600/400"
        }
    ];

    const inventoryListDiv = document.querySelector('.inventory-list');
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    const statusFilter = document.getElementById('statusFilter');
    const loadingMessage = document.getElementById('loadingMessage');

    const modal = document.getElementById('itemDetailModal');
    const closeButton = document.querySelector('.close-button');
    const modalItemName = document.getElementById('modalItemName');
    const modalItemImage = document.getElementById('modalItemImage');
    const modalItemDescription = document.getElementById('modalItemDescription');
    const modalItemQuantity = document.getElementById('modalItemQuantity');
    const modalItemLocation = document.getElementById('modalItemLocation');
    const modalItemType = document.getElementById('modalItemType');
    const modalItemStatus = document.getElementById('modalItemStatus');
    const modalItemDetailedInfo = document.getElementById('modalItemDetailedInfo');

    function displayInventory(items) {
        inventoryListDiv.innerHTML = '';
        if (items.length === 0) {
            inventoryListDiv.innerHTML = '<p>Nenhum item encontrado com os critérios de busca ou filtro.</p>';
            return;
        }

        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('inventory-item');
            itemDiv.dataset.itemId = item.id; 

            let statusClass = 'available';
            if (item.status.includes('Disponível')) {
                statusClass = 'available';
            } else if (item.status.includes('Indisponível') || item.status.includes('Manutenção')) {
                statusClass = 'unavailable';
            } else if (item.status.includes('empréstimo')) {
                   statusClass = 'emprestimo';
            } else if (item.status.includes('Instalado')) {
                   statusClass = 'instalado';
            }

            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Descrição:</strong> ${item.description.substring(0, 70)}...</p>
                <p><strong>Quantidade:</strong> ${item.quantity}</p>
                <p><strong>Tipo:</strong> ${item.type}</p>
                <p><strong>Status:</strong> <span class="status ${statusClass}">${item.status}</span></p>
            `;
            inventoryListDiv.appendChild(itemDiv);
        });

        document.querySelectorAll('.inventory-item').forEach(itemElement => {
            itemElement.addEventListener('click', () => {
                const itemId = itemElement.dataset.itemId;
                const selectedItem = inventoryData.find(item => item.id === itemId);
                
                if (selectedItem) {
                    modalItemName.textContent = selectedItem.name;
                    modalItemDescription.textContent = selectedItem.description;
                    modalItemQuantity.textContent = selectedItem.quantity;
                    modalItemLocation.textContent = selectedItem.location;
                    modalItemType.textContent = selectedItem.type;
                    modalItemStatus.textContent = selectedItem.status;
                    
                    if (selectedItem.imageUrl) {
                        modalItemImage.src = selectedItem.imageUrl;
                        modalItemImage.style.display = 'block';
                    } else {
                        modalItemImage.src = '';
                        modalItemImage.style.display = 'none';
                    }

                    let detailedHtml = `<p><strong>Código do Item:</strong> ${selectedItem.id}</p>`;
                    if (selectedItem.catalogueCode) { 
                        detailedHtml += `<p><strong>Código do Catálogo:</strong> ${selectedItem.catalogueCode}</p>`;
                    }
                    
                    modalItemDetailedInfo.innerHTML = detailedHtml;
                    
                    modalItemStatus.className = `status ${selectedItem.status.includes('Disponível') ? 'available' :
                                                  (selectedItem.status.includes('Indisponível') || selectedItem.status.includes('Manutenção') ? 'unavailable' :
                                                  (selectedItem.status.includes('empréstimo') ? 'emprestimo' :
                                                  (selectedItem.status.includes('Instalado') ? 'instalado' : '')))}`;

                    modal.style.display = 'flex';
                }
            });
        });
    }

    function filterInventory() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedType = typeFilter.value;
        const selectedStatus = statusFilter.value;

        const filteredItems = inventoryData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
                                  item.description.toLowerCase().includes(searchTerm);
            const matchesType = selectedType === "" || item.type === selectedType;
            const matchesStatus = selectedStatus === "" || item.status === selectedStatus;
            return matchesSearch && matchesType && matchesStatus;
        });

        displayInventory(filteredItems);
    }

    searchInput.addEventListener('keyup', filterInventory);
    typeFilter.addEventListener('change', filterInventory);
    statusFilter.addEventListener('change', filterInventory);
    
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    loadingMessage.remove();
    displayInventory(inventoryData);
});