import { test, expect } from '@playwright/test'

test('deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  await page.getByTestId('search-order-id').fill('VLO-5NT495')
  await page.getByRole('button', { name: 'Buscar Pedido' }).click()

  await expect(page.getByText('VLO-5NT495')).toBeVisible({ timeout: 10000 })
  await expect(page.locator('//p[text()="VLO-5NT495"]')).toContainText('VLO-5NT495')

  await expect(page.getByText('APROVADO')).toBeVisible()
  await expect(page.locator('div.text-green-700')).toContainText('APROVADO')

  

})