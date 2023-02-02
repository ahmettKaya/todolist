const addTaskButton = document.getElementById("addTask")

addTaskButton.addEventListener('click', function () {
    let item = document.createElement('label')
    
    item.innerHTML = `
        <label class="list-group-item d-flex gap-3">
            <input class="form-check-input flex-shrink-0" type="checkbox" value="" style="font-size: 1.375em" />
            <span class="pt-1 form-checked-content">
                <strong>Finish sales report
                </strong>
                <small class="d-block text-muted">
                    <svg class="bi me-1" width="1em" height="1em">
                        <use xlink:href="#calendar-event" />
                    </svg>
                    1:00–2:00pm
                </small>
            </span>
        </label>`

    let list = document.getElementById('list')
    console.log(list)
    list.prepend(item)
    console.log(list.children.length)
})