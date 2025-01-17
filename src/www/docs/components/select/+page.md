---
file: select.md
title: Select
api:
    [
        {
            title: 'options: Option[] = []',
            description: 'Select options array',
            variables: 'type Option = Primitive | { value: Primitive; label?: string };',
        },
        {
            title: 'value: Value',
            description: 'Select value',
            variables: 'type Value = Primitive[] | Primitive | undefined;',
        },
        {
            title: 'selected: Selected',
            description: 'Select selected option',
            variables: 'type Selected = number[] | number | undefined;',
        },
        {
            title: 'inline: boolean = false',
            description: 'Select inline',
            variables: 'true | false',
        },
        {
            title: 'multiple: boolean = false',
            description: 'Select multiple',
            variables: 'true | false',
        },
        { title: 'placeholder: string', description: 'Select placeholder' },
        {
            title: 'size: Size',
            description: 'Select size',
            variables: 'xs | md | lg',
        },
        {
            title: 'validity: Validity = null',
            description: 'Checkbox validity',
            variables: 'null | success | error',
        },
    ]
config:
    {
        label: { size: 12 },
        selected: { type: 'number', min: 0, max: 2, size: 5 },
        size: { options: ['sm', 'md', 'lg'] },
        inline: { type: 'checkbox' },
        validity: { options: [null, 'success', 'error'] },
    }
---

<script>
    import {Form, FormGroup, Select} from '$lib'
    import Knobs from '../../knobs.svelte'

    let multiple = false, 
        selected = 1,
        multi = [1], 
        questions = [
            { value: 1, label: `Where did you go to school?` },
            { value: 2, label: `What is your mother's name?` },
            {
                value: 3,
                label: `What is another personal fact that an attacker could easily find with Google?`
            }
        ]
    
    let state = { 
        selected: multiple ? [1] : 1, 
        size: 'md', 
        inline: false, 
        validity: null 
    }
</script>

# {title}

## Single select

<p>
    <Form>
        <FormGroup>
            <Select
                options={questions}
                bind:value={selected}
                bind:selected={state.selected}
                bind:multiple={state.multiple}
                validity={state.validity}
                size={state.size}>
            <span slot="label">{state.label}</span>
            </Select>
        </FormGroup>
        Selected: {selected}
    </Form>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Select } from 'svelte-spectre'

    let selected = 1,
        options = [ 1, 2, 3 ],
        multiple = false,
        validity = null,
        size = 'md'
</script>

<Select
    options={options}
    bind:value={selected}
    bind:selected={selected}
    bind:multiple={multiple}
    validity={validity}
    size={size} />
```

## Multiple select

<p>
    <Form>
        <FormGroup>
            <Select options={questions} bind:value={multi} multiple>
                <span slot="label">{state.label}</span>
            </Select>
        </FormGroup>
        Selected: {multi}
    </Form>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Select } from 'svelte-spectre'

    let selected = 1,
        options = [ 1, 2, 3 ],
        multiple = false,
        validity = null,
        size = 'md'
</script>

<Select
    options={options}
    bind:value={selected}
    bind:selected={selected}
    validity={validity}
    size={size}
    multiple />
```
