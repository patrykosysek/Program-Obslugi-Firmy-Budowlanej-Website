Vue.component('history-order-item', {

	methods : {
	},
	props: ['item_photo_url', 'item_name', 'item_price', 'item_count', 'isArchived'],
	template: `
    <li class="item_of_order">
        <img :src="item_photo_url" class="item_photo">
        <div class="order_item_details">
            <h3>{{item_name}}</h3>
            <h4>Przedmiot archiwalny: {{isArchived}}</h4>
            <h4>Cena za sztukę: {{item_price}}</h4>
            <h4>Ilość sztuk: {{item_count}}</h4>
            <h3>Suma: {{suma}}</h4>
        </div>
    </li>
		`
})